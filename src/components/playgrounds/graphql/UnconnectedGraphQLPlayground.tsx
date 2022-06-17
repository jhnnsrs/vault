import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import GraphiQL from "graphiql";
import GraphiQLExplorer from "graphiql-explorer";
import { from, map } from "rxjs";
import { gql} from "@apollo/client";
import { exportToCsv, flatten } from "./utils";
import { buildClientSchema, getIntrospectionQuery, parse } from "graphql";
import { useMikro } from "../../mikro/mikro-types";

let latestQuery = undefined;

export const fetchFromClient = (client, params, doc) => {
  switch (
    doc.definitions.find((def) => def.kind == "OperationDefinition").operation
  ) {
    case "query":
      return from(client.query({ ...params, query: doc }));
    case "mutation":
      return from(client.mutate({ ...params, mutation: doc }));
    case "subscription":
      return from(client.subscribe({ ...params, query: doc }));
  }
};

export const UnconnectedGraphQLPlayground = ({
  initialQuery,
  height,
  width,
}) => {
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [schema, setSchema] = useState(null);
  const [query, setQuery] = useState(initialQuery);
  const graphiql = useRef<any>(null);

  const {client} = useMikro()


  const subObservableFetcher = (params, opts) => {
    console.log(params, opts);
    let doc = gql(params.query);
    return fetchFromClient(client, params, doc).pipe(
      map((result: any) => ({ data: result.data, errors: result.errors })),
      map((result) => {
        latestQuery = result;
        return result;
      })
    );
  };

  useEffect(() => {
    subObservableFetcher(
      {
        query: getIntrospectionQuery(),
      },
      {}
    ).subscribe((res) => {
      console.log(res);
      let schema = buildClientSchema(res.data);
      console.log(schema);
      setSchema(schema);
    });
  }, []);

  const openWindow = () => {
    window.open("test");
  };

  const toExcel = () => {
    if (latestQuery.data) {
      if (latestQuery.data.__schema) {
        alert("Please run a first Query before Exporting!");
        return;
      }

      Object.keys(latestQuery.data)
        .map((key) => {
          let table_data = latestQuery.data[key];
          if (Array.isArray(table_data)) {
            return [key, table_data.map((el) => flatten(el))];
          }
          return [key, [flatten(table_data)]];
        })
        .forEach((items) => {
          try {
            exportToCsv(items[0] + ".csv", items[1]);
          } catch (e) {
            alert(e);
          }
        });
    }
  };

  const handleEditQuery = (query: string) => setQuery(query);

  const handleInspectOperation = (
    cm: any,
    mousePos: { line: Number; ch: Number }
  ) => {
    const parsedQuery = parse(query || "");

    if (!parsedQuery) {
      console.error("Couldn't parse query document");
      return null;
    }

    var token = cm.getTokenAt(mousePos);
    var start = { line: mousePos.line, ch: token.start };
    var end = { line: mousePos.line, ch: token.end };
    var relevantMousePos = {
      start: cm.indexFromPos(start),
      end: cm.indexFromPos(end),
    };

    var position = relevantMousePos;

    var def = parsedQuery.definitions.find((definition) => {
      if (!definition.loc) {
        console.log("Missing location information for definition");
        return false;
      }

      const { start, end } = definition.loc;
      return start <= position.start && end >= position.end;
    });

    if (!def) {
      console.error(
        "Unable to find definition corresponding to mouse position"
      );
      return null;
    }

    var operationKind =
      def.kind === "OperationDefinition"
        ? def.operation
        : def.kind === "FragmentDefinition"
        ? "fragment"
        : "unknown";

    var operationName =
      def.kind === "OperationDefinition" && !!def.name
        ? def.name.value
        : def.kind === "FragmentDefinition" && !!def.name
        ? def.name.value
        : "unknown";

    var selector = `.graphiql-explorer-root #${operationKind}-${operationName}`;

    var el = document.querySelector(selector);
    el && el.scrollIntoView();
  };

  const handleToggleExploer = () => {
    setExplorerOpen(!explorerOpen);
  };

  return (
    <div
      style={{
        width: width || "100%",
        height: height || 600,
        marginBottom: "10px",
      }}
      className="relative flex"
    >
      <div className="graphql-playground flex-grow"></div>
      <GraphiQL
        ref={graphiql}
        fetcher={subObservableFetcher}
        editorTheme={"duotone-dark"}
        query={query}
        onEditQuery={handleEditQuery}
        schema={schema}
      >
        <GraphiQL.Toolbar>
          <button
            id="excel"
            onClick={() => toExcel()}
            className="excel"
            title="Download Excel File"
            aria-label="Download Excel File"
          >
            t
          </button>
          <button
            id="excel"
            onClick={() => openWindow()}
            className="excel"
            title="Open in New Window"
            aria-label="Open in New Window"
          >
          </button>
          w
          <button
            id="excel"
            onClick={() => handleToggleExploer()}
            className="excel"
            title="Open in New Window"
            aria-label="Open Explorer"
          >
            e
          </button>
        </GraphiQL.Toolbar>
        <GraphiQL.Logo>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/131px-GraphQL_Logo.svg.png" />
        </GraphiQL.Logo>
      </GraphiQL>
      <div className="graphql-explorer flex bg-dark z-50">
        <GraphiQLExplorer
          schema={schema}
          query={query}
          onEdit={handleEditQuery}
          explorerIsOpen={explorerOpen}
          onToggleExplorer={handleToggleExploer}
        />
      </div>
    </div>
  );
};




export default UnconnectedGraphQLPlayground

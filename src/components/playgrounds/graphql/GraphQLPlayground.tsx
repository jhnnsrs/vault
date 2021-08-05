import React, {useState, useEffect} from "react"
import GraphiQL from 'graphiql';
import { from,  map } from 'rxjs';
import {  Table, Window } from 'react-bootstrap-icons';
import { gql, useApolloClient } from "@apollo/client";
import { arkitektConnect } from "../../apollo";
import { exportToCsv, flatten } from "./utils";


let latestQuery = undefined;


export const fetchFromClient = (client, params, doc) => {
    switch (doc.definitions.find(def => def.kind == "OperationDefinition").operation){
        case "query": return from(client.query({...params, query: doc}))
        case "mutation": return from(client.mutate({...params, mutation: doc}))
        case "subscription": return from(client.subscribe({...params, query: doc}))  
    }
}


export const UnconnectedGraphQLPlayground = ({initialQuery, height, width}) => {

    const client = useApolloClient(); 

    const subObservableFetcher = (params, opts) => {
        console.log(params, opts)
        let doc = gql(params.query)
        return fetchFromClient(client, params, doc).pipe(
            map( (result: any) => ({...result, stack: undefined})),
            map( result => {latestQuery = result; return result})
            
        )
    }


    const openWindow = () => {
        window.open("test")
    }

    const toExcel = () => {
        if (latestQuery.data) {
            if (latestQuery.data.__schema) {
                alert("Please run a first Query before Exporting!")
                return;
            }

            Object.keys(latestQuery.data).map(key => {
                let table_data = latestQuery.data[key]
                if (Array.isArray(table_data)) {
                    return [key, table_data.map(el => flatten(el))];
                }
                return [key, [flatten(table_data)]];
            }
            ).forEach(items => {
                try {exportToCsv(items[0] + ".csv", items[1])}
                catch (e) {alert(e)};
            });
        }
    }



    return (<div style={{width: width || "100%", height: height || 600, marginBottom: "10px"}}>
     <GraphiQL fetcher={subObservableFetcher} editorTheme={'duotone-dark'} query={initialQuery}>
        <GraphiQL.Toolbar>
            <button id="excel" onClick={() => toExcel()} className="excel" title="Download Excel File" aria-label="Download Excel File"><Table color="white" size={17} /></button>
            <button id="excel" onClick={() => openWindow()} className="excel" title="Open in New Window" aria-label="Open in New Window"><Window color="white" size={17} /></button>
        </GraphiQL.Toolbar>
        <GraphiQL.Logo><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/131px-GraphQL_Logo.svg.png"/></GraphiQL.Logo>
         
    </GraphiQL>
    </div>)
}

export const GraphQLPlayground = arkitektConnect(UnconnectedGraphQLPlayground)
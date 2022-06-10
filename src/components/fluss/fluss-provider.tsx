import {
  ApolloClient,
  ApolloProvider,
  gql,
  NormalizedCacheObject,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useFakts } from "../fakts/fakts-config";
import { useHerre } from "../herre/herre-context";
import { createFlussClient } from "./client";
import { FlussContext } from "./fluss-types";

export type ElementsProps = {
  register?: boolean;
};

export const FlussProvider: React.FC<ElementsProps> = ({
  register = true,
  children,
}) => {
  const [client, setClient] = useState<ApolloClient<
    NormalizedCacheObject
  > | null>(null);
  const { token } = useHerre();
  const { fakts } = useFakts();

  useEffect(() => {
    if (fakts && token && fakts.mikro) {
      console.log(token);
      var client = createFlussClient(fakts.mikro, token);
      setClient(client);

      const runFunc = (options: { query: string; variables: any }) => {
        let document = gql(options.query);
        return client
          .query({
            query: document,
            variables: options.variables,
          })
          .then((result) => result.data);
      };
    }
  }, [token, fakts, register]);

  const s3resolve = (path?: string | null) => {
    if (fakts.mikro && path) {
      return `http://${fakts.mikro.datalayer?.endpoint_url}${path}`;
    }
    return "fallback";
  };

  return (
    <FlussContext.Provider
      value={{
        client: client,
      }}
    >
      {client ? (
        <ApolloProvider client={client}>{children}</ApolloProvider>
      ) : (
        children
      )}
    </FlussContext.Provider>
  );
};

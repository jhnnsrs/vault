import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { Token } from "../herre/herre-types";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { FlussConfig } from "./fluss-types";

export const createFlussClient = (config: FlussConfig, token: Token) => {
  const httpLink = createHttpLink({
    uri: config.endpoint_url,
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  const queryLink = httpLink;

  const wsLink = new WebSocketLink({
    uri: `${config.ws_endpoint_url}?token=${token}`,
    options: {
      reconnect: true,
    },
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    (queryLink as unknown) as ApolloLink
  );

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });
};

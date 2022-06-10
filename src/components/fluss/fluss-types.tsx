import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import React, { useContext } from "react";

export type FlussConfig = {
  endpoint_url: string;
  ws_endpoint_url: string;
  healthz: string;
  secure: boolean;
};

export type FlussContextType = {
  client?: ApolloClient<NormalizedCacheObject>;
};

export const FlussContext = React.createContext<FlussContextType>({});

export const useFluss = () => useContext(FlussContext);

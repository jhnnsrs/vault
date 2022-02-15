import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import React, { useContext } from "react";



export type FaktsContext<T extends {} = {}> = {
    fakts: T
    setFakts: (fakts: T) => void
    deleteFakts: () => void

}

export type NoFaktsContext<T extends any= any> = {
    setFakts: (fakts: T) => void
    

}

export const FaktsContext= React.createContext<FaktsContext<any>>({
fakts: null as unknown as any,
  setFakts: () => {},
  deleteFakts: () => {}
});


export const NoFaktsContext = React.createContext<NoFaktsContext<any>>({
  setFakts: () => {},
});


export const useFakts = () => useContext(FaktsContext);
export const useNoFakts = () => useContext(NoFaktsContext);

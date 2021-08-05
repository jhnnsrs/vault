import React, {useState, useEffect, useContext} from "react"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

export type Context = "local" | "demo" | "none"

export type ConnectionContext = {
    context: Context,
    connect?: (url: string) => void
}

export const ConnectionContext = React.createContext<ConnectionContext>({context: "local", connect: (url: string) => {}})

export const useConnectionContext = () => useContext(ConnectionContext)

export const RootProvider = ({children, fallback}: any) => {

    const [client, setClient] = useState(undefined)
    const [context, setContext] = useState<Context>("demo")


    const connect = (url: string) => {
        let client = new ApolloClient({
            uri: url,
            cache: new InMemoryCache()
        });
        setContext("local")
        setClient(client)
    }

    const democonnect = () => {
        let client = new ApolloClient({
            uri: 'http://localhost:8080/graphql',
            cache: new InMemoryCache()
        });

        setContext("demo")
        setClient(client)
    }

    const disconnect = () => {
        setContext("none")
        setClient(undefined)
    }

    useEffect(() => {
        democonnect()
    }, [])


    if (client) {
    return <ConnectionContext.Provider value={{connect, context}}>
                <ApolloProvider client={client}>
                 {children}

                </ApolloProvider>
    
            </ConnectionContext.Provider>
    }
    


    return <ConnectionContext.Provider value={{connect, context}}>
                {children}
        </ConnectionContext.Provider>


}
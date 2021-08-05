import React, {useState, useEffect, useContext} from "react"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "./test.css"
import "./tailwind.css"
import {Link} from "react-bootstrap-icons";

export type UnConnectedContext = {
    connect?: (url: string) => void
}

export type ConnectedContext = {
    disconnect?: () => void
}

export const UnConnectedApolloContext = React.createContext<UnConnectedContext>({})
export const ConnectedApolloContext = React.createContext<ConnectedContext>({})


export const useConnected = () => useContext(ConnectedApolloContext)
export const useUnConnected = () => useContext(UnConnectedApolloContext)

export const ConnectedApollo = ({children, fallback}: any) => {

    const {siteConfig} = useDocusaurusContext()
    const [client, setClient] = useState(undefined)


    const connect = (url: string) => {

        let client = new ApolloClient({
            uri: url,
            cache: new InMemoryCache()
        });
        setClient(client)
    }

    const disconnect = () => {

        setClient(undefined)
    }




    useEffect(() => {
        let defaultClient = siteConfig.customFields

        const client = new ApolloClient({
            uri: 'http://localhost:8080/graphql',
            cache: new InMemoryCache()
        });

        setClient(client)

    }, [])


    if (!client) {
    return <UnConnectedApolloContext.Provider value={{connect}}>
        <div id="tailwind">
        <div className="wrapper">
            <div className="supertoolbar">
                <div className="title">Not Connected</div>
                <div className="buttonbar">
                <button onClick={() => connect('http://localhost:8080/graphql')}><Link height={17} color="white"/></button>
                </div>

            </div>{fallback}
        </div>
        </div>
    </UnConnectedApolloContext.Provider>
    }
    


    return <ConnectedApolloContext.Provider value={{disconnect}}>
        <div id="tailwind">
        <div className="wrapper">
            <div className="supertoolbar">
                <div className="title">Connected to <span>localhost</span></div>
                <div className="buttonbar">
                <button onClick={() => disconnect()}><Link height={17} color="white"/></button>
                </div>

            </div>
                    <ApolloProvider client={client}>
                 {children}

                </ApolloProvider>
        
        </div>
        </div>
        </ConnectedApolloContext.Provider>


}

export const ApolloFallback = (props: any) => {

    const { connect } = useUnConnected()

    return <div className="fallback"> <button className="connect" onClick={() => connect("http://localhost:8080/graphql")}>Connect to Localhost </button> </div>
}


export const arkitektConnect = (Child, fallback? ) => {
    return (props) => 
    <ConnectedApollo fallback={fallback ? fallback(props) : <ApolloFallback {...props} />}><Child {...props}/></ConnectedApollo>
}
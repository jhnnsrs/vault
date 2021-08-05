import React, {useState, useEffect} from "react"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

import { arkitektConnect } from "../../../src/components/apollo";
import "./images.css"

const TEST_IMAGES = gql`
  query Representations {
    representations(limit: 6) {
      name
      id
    }
  }
`;



const TestImagesUnwrapped = (props) => {
    const {data, loading} = useQuery(TEST_IMAGES)
    const { disconnect} = useConnected()

    if (!data) return ""


    return <div className="testimages">
        <div className="grid">
        {data?.representations?.map( rep => 
            <div className="repcard">
            {rep?.name}
            {rep?.id}
            
            
            
            </div>)}
        </div>
    </div>
}



export const TestImages = arkitektConnect(TestImagesUnwrapped)
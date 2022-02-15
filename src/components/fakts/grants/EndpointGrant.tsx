import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { useFakts, useNoFakts } from '../fakts-context'
import {v4} from "uuid"
import qs from "query-string"

export type EndpointGrantProps = {
    hardFakts: any


}


export const EndpointGrant: React.FC<EndpointGrantProps> = (props) => {

    const { setFakts} = useFakts()

    const [endpointURL, setEndpointURL] = useState<string>("localhost")
    const [redirectURI, setRedirectURI] = useState<string | undefined>()

    const history = useHistory()

    useEffect(() => {
        let location  = window.location
        console.log(location)


        if (window.location.search.startsWith("?config")) {
            let potentialReturn = qs.parse(window.location.search)

            if (potentialReturn.state && potentialReturn.config) {
                console.log(potentialReturn.state)
                let fakts = JSON.parse(potentialReturn.config as string)
                console.log(fakts)
                setFakts(fakts)
            }
            else {
                console.log(potentialReturn)
            }
               
        }
        else {
            let nonce = v4()

            localStorage.setItem('nonce', nonce);
            setRedirectURI(qs.stringify({state: nonce, redirect_uri: window.location.href}))
        }

        
    }, [])


    return <>
        <div id="tailwind">
            <input className="button mr-2 px-2 rounded" type="text" onChange={(e) => setEndpointURL(e.target.value)}/>
            <a href={`http://${endpointURL}:3000/setupapp?${redirectURI}`} className="button">Open</a>
        </div>
    </>
}
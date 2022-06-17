import React from "react"
import { useFakts } from "../fakts/fakts-config"


export const ChangeFaktsButton = (props) => {
    
    const { fakts, load } = useFakts()

    return <>
        <button onClick={ () => load({base_url: "http://localhost:8000/f/", name:"Test"})}>Login to Fakts</button>
    
    </>


}
import { ShowFlow } from "./ShowFlow"
import React, {useEffect, useState} from "react"
import { Elements } from "react-flow-renderer"
import { arkitektConnect } from "../../apollo"
import { GraphElements } from "./engine/types"
import { showengine } from "./engine/showengine"
import * as Icons from "react-bootstrap-icons"


export type FlowPlaygroundProps = {
    graph?: GraphElements
    graphurl?: string
    height?: number
}




export const UnConnectedFlowPlayground: React.FC<FlowPlaygroundProps> = (props) => {

    const [graph, setGraph] = useState(props.graph)

    useEffect(() => {
        console.log("run", props.graphurl)
        if (!graph && props.graphurl){
            console.log(props.graphurl)
            fetch(props.graphurl)
            .then(function(response) {
                return response.json();
            }).then(graph => {
                console.log(graph.diagram.elements)
            
                setGraph(graph.diagram.elements as GraphElements)
            }
            )
        }
    }, [])

    if (!graph) return <div> Loading </div>

    
    return <>
        <ShowFlow graph={graph} height={props.height} engine={showengine}/>

        <div className="w-100 h-10 flex">
            <a className="font-light text-xl mr-2 my-auto cursor-pointer">fluss</a>
        </div>
    </>
}

export const ConnectedFlowPlayground: React.FC<FlowPlaygroundProps> = (props) => {

    const [graph, setGraph] = useState(props.graph)

    useEffect(() => {
        console.log("run", props.graphurl)
        if (!graph && props.graphurl){
            console.log(props.graphurl)
            fetch(props.graphurl)
            .then(function(response) {
                return response.json();
            }).then(graph => {
                console.log(graph.diagram.elements)
            
                setGraph(graph.diagram.elements as GraphElements)
            }
            )
        }
    }, [])

    if (!graph) return <div> Loading </div>

    
    return <>

        <ShowFlow graph={graph} height={props.height} engine={showengine}/>
        <div className="w-100 h-10 flex">
            <a className="font-light text-xl mr-2 my-auto cursor-pointer" href="http://localhost:8070/">fluss</a>
            <button className="bg-transparent border-none my-auto"><Icons.Play size={20} color={"white"}/></button>
            <button className="bg-transparent border-none my-auto"><Icons.Save size={15} color={"white"}/></button>
            <button className="bg-transparent border-none ml-auto my-auto"><Icons.Reply size={15} color={"white"}/></button>
        </div>
    
    
    </>
}


export const FlowPlayground = arkitektConnect(ConnectedFlowPlayground, UnConnectedFlowPlayground)
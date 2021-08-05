import React, { useState } from "react";
import ReactFlow, { addEdge, Background, ReactFlowProvider, removeElements } from "react-flow-renderer";
import { toast, ToastContainer } from "react-toastify";
import { Engine, GraphElements } from "./engine/types";



export type ShowFlowProps = {
    graph: GraphElements
    height?: number
    width?: number
    engine: Engine
}
  
  
export const ShowFlow: React.FC<ShowFlowProps> = ({graph, height, engine, width}) => {
    const [elements, setElements] = useState(graph);

    const setNodeError = (id: string, error: string) => {
    toast.error("Node " + id + error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    };

    const setDiagramError = (error: string) => {
    toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    };


    const helpers = {
        setDiagramError,
        setElements,
        setNodeError
    }

    const onConnect = (params) => engine.onConnect(params, elements, helpers)
    const onElementsRemove = (removedelements: GraphElements) => engine.onElementsRemove(removedelements, elements, helpers)
    const onLoad = (onload) => engine.onLoad(onload)

    return (
        <div style={{height: height || "100%", width: width || "100%"}}>
        <ReactFlowProvider>
            <ReactFlow
                nodeTypes={engine.nodeTypes}
                edgeTypes={engine.edgeTypes}
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                onLoad={onLoad}
            >
                <Background color="#aaa" gap={16} />
            </ReactFlow>
        </ReactFlowProvider>
        </div>
    );
};
import React from "react";
import { Connection, Edge, EdgeProps, Node, OnLoadParams } from "react-flow-renderer";

export type GraphEdge = Edge


export type ArkitektData = {
    node: any; //needs to override
    selector: any;
}


export interface GraphNodeType<M extends string, T extends any> extends Node<T> {
    type?: M
    data?: T
}


export type CombinationData = {arg1: any, arg2: any, return: any}
export type SplitData = {arg: any, return1: any, return2: any}
export type JustNode = {kwarg: any, return: any}


export type ReactiveGraphNode = GraphNodeType<"reactiveNode", CombinationData>

export type ZipReactiveGraphNode = GraphNodeType<"zipNode", CombinationData>
export type WithLatestFromReactiveGraphNode = GraphNodeType<"withLatestFromNode", CombinationData>
export type MergeReactiveElementNode = GraphNodeType<"mergeNode", CombinationData>
export type SplitReactiveElementNode = GraphNodeType<"splitNode", SplitData>
export type JustNodeElementNode = GraphNodeType<"justNode", JustNode>



export type GraphNode = GraphNodeType<string,any>
export type Element = Edge | GraphNode
export type GraphElements = Element[];

export type SetFunction = (el: GraphElements) => GraphElements;
export type SetGraphElementsFunction = (setter: SetFunction) => any
export type SetDiagramErrorFunction = (error: string) => void
export type SetNodeErrorFunction = (id: string, error: string) => void

export type EngineHelpers = {
    setElements: SetGraphElementsFunction
    setDiagramError: SetDiagramErrorFunction
    setNodeError: SetNodeErrorFunction
} 

export type EngineLoadParams = Omit<OnLoadParams, 'getElements'> & { getElements: () => GraphElements}

  
export type Engine = {
    nodeTypes?: {[key: string]: React.FC<GraphNodeType<any, any>>}
    edgeTypes?: {[key: string]: React.FC<EdgeProps>}
    onConnect: (params: Edge<any> | Connection, elements, helpers: EngineHelpers) => void
    onElementsRemove: (remove_elements: GraphElements, elements, helpers: EngineHelpers) => void
    onLoad: (params: EngineLoadParams) => void
}
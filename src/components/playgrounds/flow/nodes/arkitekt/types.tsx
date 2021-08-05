import { GraphNodeType } from "../../engine/types"


export type SelectorValues = any

export type ArkitektData = {
    node: any; //needs to override
    selector: SelectorValues;
}

export enum NodeType {
    Generator = "GENERATOR", Function = "FUNCTION"
}

export type ArgPort = any // Maybe<ArgPortFragment>
export type KwargPort = any // Maybe<KwargPortFragment>
export type ReturnPort = any // Maybe<ReturnPortFragment>


export type ArkitektGraphNode = GraphNodeType<"arkitektNode", ArkitektData>
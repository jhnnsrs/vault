import { StreamEdge } from "../edges/StreamEdge";
import { ArkitektNode } from "../nodes/arkitekt/ArkitektNode";
import { ArgsNode } from "../nodes/basic/ArgsNode";
import { KwargsNode } from "../nodes/basic/KwargsNode";
import { ReturnsNode } from "../nodes/basic/ReturnsNode";
import { Engine } from "./types";


export const showengine: Engine = {
    nodeTypes: {
        arkitektNode: ArkitektNode,
        argNode: ArgsNode,
        returnNode: ReturnsNode,
        kwargNode: KwargsNode
        
    },
    edgeTypes: {
        stream: StreamEdge,
    },
    onConnect: (params, elements, helper) => helper.setDiagramError("We cannot connect in ShowMode. Please Swap to Edit Mode"),
    onElementsRemove: (params, elements, helper) => helper.setDiagramError("We cannot delete Elements in ShowMode"),
    onLoad: (params) => {
        params.fitView()

    }



}



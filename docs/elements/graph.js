import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';


const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};


export const OverviewFlow = (props) => {
  const [elements, setElements] = useState(props.graph);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
      <div style={{height: props.height, width: "100%"}}>
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
    >
      <Background color="#aaa" gap={16} />
    </ReactFlow>
    </div>
  );
};

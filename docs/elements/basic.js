import React from 'react';

export const basicGraph = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          <strong>Microscope</strong>
        </>
      ),
    },
    position: { x: 200, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          <strong>Maximum Intensity Projection</strong>
        </>
      ),
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: "output",
    data: {
      label: (
        <>
          <strong>Display</strong>
        </>
      ),
    },
    position: { x: 600, y: 200 },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Stack', type:"smoothstep"},
  { id: 'e1-3', source: '2', target: '3', animated: true, label: 'Image',  type:"smoothstep"},
];
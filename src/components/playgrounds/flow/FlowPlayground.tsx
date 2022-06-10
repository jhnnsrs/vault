import { ShowFlow } from "./ShowFlow";
import React, { useEffect, useState } from "react";
import { Elements } from "react-flow-renderer";
import { GraphElements } from "./engine/types";
import { showengine } from "./engine/showengine";
import * as Icons from "react-bootstrap-icons";
import { flussGuarded } from "../../fluss/fluss-guard";

export type FlowPlaygroundProps = {
  graph?: GraphElements;
  graphurl?: string;
  height?: number;
};

export const UnConnectedFlowPlayground: React.FC<FlowPlaygroundProps> = (
  props
) => {
  const [graph, setGraph] = useState(props.graph);

  if (!graph) return <div> Loading </div>;

  return (
    <>
      <div className="w-100 h-10 flex">
        <a className="font-light text-xl mr-2 my-auto cursor-pointer">fluss</a>
      </div>
    </>
  );
};

export const ConnectedFlowPlayground: React.FC<FlowPlaygroundProps> = (
  props
) => {
  const [graph, setGraph] = useState(props.graph);

  if (!graph) return <div> Loading </div>;

  return (
    <>
      <div className="w-100 h-10 flex">
        <a
          className="font-light text-xl mr-2 my-auto cursor-pointer"
          href="http://localhost:8070/"
        >
          fluss
        </a>
      </div>
    </>
  );
};

export const FlowPlayground = flussGuarded(ConnectedFlowPlayground);

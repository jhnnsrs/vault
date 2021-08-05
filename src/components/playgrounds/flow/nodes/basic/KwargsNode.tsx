import React, { useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import * as Icon from "react-bootstrap-icons";
import { GraphNodeType } from "../../engine/types";
import { kwargToTip } from "../arkitekt/utils";


export type KwargElementNode = GraphNodeType<"kwargNode", {kwargs: any[]}>

export const KwargsNode: React.FC<KwargElementNode> = ({
  data: { kwargs },
  id,
}) => {

  const [isSmall, setIsSmall] = useState(true);
  const bigWidth = 500

  return (
    <>
      {kwargs?.map((kwarg, index, array) => (
        <Handle
          key={index}
          type="source"
          position={Position.Top}
          id={"kwarg_" + kwarg?.key}
          style={{ background: "#555", left: isSmall ? (index+1)*20 : Math.floor((index+0.5)*(1/array.length)*100) + "%", transform: "none"}}
          data-tip={`${kwarg?.label} ${kwargToTip(kwarg)}`}
          data-for={"tooltip" + id}
        >
        </Handle>
      ))}
      <div
        style={{ border: "1px solid #95FF00", width: isSmall ? 200 : bigWidth }}
        className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
      >
        {!isSmall &&
        <>
          <div className="flex">
            {kwargs?.map((kwarg, index) => <>
            <div key={index} className="flex-1 border m-1 py-0 px-1 rounded border-gray-200" data-tip={`${kwarg?.description}`} data-for={"tooltip_special" + id}>
              <div className="flex justify-between">
                        <div>
                    <span className="text-xs">{kwargToTip(kwarg)}</span> {kwarg?.label}
                    </div>
              </div>
            </div>
            </>)}
          </div>
        </>
        }
        <div className="px-2 py-2">
          <div className="font-light text-xl w-full text-center" onDoubleClick={() => setIsSmall(!isSmall)}>Constants </div>
          <p className="text-gray-700 text-base"></p>
          {!isSmall &&
            <> Nothing</>
          }
        </div>
      
      </div>
    </>
  );
};
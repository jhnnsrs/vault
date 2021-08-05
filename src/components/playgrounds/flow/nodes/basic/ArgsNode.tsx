import React, { memo, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { GraphNodeType } from "../../engine/types";



export type ArgElementNode = GraphNodeType<"argNode", {args: any[]}>


export const ArgsNode: React.FC<ArgElementNode> = memo(
  ({ data: { args }, id }) => {

    const [isSmall, setIsSmall] = useState(true);


    return (
      <>
        <div
          style={{ border: "1px solid #FF0095", backgroundColor: "#fff" }}
          className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
        >
          <div className="px-2 py-2">
            <div className="font-light text-xl" onDoubleClick={() => setIsSmall(!isSmall)}>Input Stream </div>
            <p className="text-gray-700 text-base">
              {args.length > 0 && (
                <>
                  {args.map((arg) => arg.key).join(" | ")}
                  <br />
                </>
              )}
            {!isSmall && <> </>
            }
            </p>
          </div>
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id={"returns"}
          style={{ background: "#555" }}
          data-tip={args.map((arg) => arg.key).join("|")}
          data-for={"tooltip" + id}
        />
      </>
    );
  }
);
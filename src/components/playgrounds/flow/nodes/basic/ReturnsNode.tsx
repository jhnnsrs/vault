import React, { memo, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { GraphNodeType } from "../../engine/types";


export type ReturnGraphNode = GraphNodeType<"returnNode", {returns: any[]}>

export const ReturnsNode: React.FC<ReturnGraphNode> = memo(
  ({ data: { returns }, id }) => {

    const [isSmall, setIsSmall] = useState(true);


    return (
      <>
        <div
          style={{ border: "1px solid #0095FF", backgroundColor: "#fff" }}
          className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
        >
          <div className="px-2 py-2">
            <div className="font-light text-xl" onDoubleClick={() => setIsSmall(!isSmall)}>Output Stream</div>
            <p className="text-gray-700 text-base">
              {returns.length > 0 && (
                <>
                  {returns.map((re) => re.key).join(" | ")}
                  <br />
                </>
              )}
              {!isSmall &&
                <> Nothing </>
              }
              </p>
          </div>
        </div>
        <Handle
          type="target"
          position={Position.Left}
          id={"args"}
          style={{ background: "#555" }}
          data-tip={returns.map((re) => re.key).join("|")}
          data-for={"tooltip" + id}
        ></Handle>
      </>
    );
  }
);

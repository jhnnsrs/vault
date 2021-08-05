import React, { useRef, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import * as Icons from "react-bootstrap-icons"
import { GraphNodeType } from "../../engine/types";
import { argToTip, kwargToTip, reToTip } from "./utils";
import { ArkitektGraphNode, NodeType, SelectorValues } from "./types";

const bigWidth = 300








export const ArkitektNode: React.FC<ArkitektGraphNode> = ({ data, id }) => {

  const inputRef = useRef<HTMLDivElement>(null);

  const [selectorShow, setSelectorShow] = useState(false);


  const [isSmall, setIsSmall] = useState(true);

  const border =
    data.node.type === NodeType.Generator
      ? "1px solid #ff0033"
      : "1px solid #ff00ff";

  return (
    <>
      <div
        style={{ border: border, width: isSmall ? 200 : bigWidth }}
        className={`max-w-sm rounded overflow-hidden shadow-xl bg-white transition-height duration-500 ease-in-out"`}
        ref={inputRef}
      >
        <div className="px-2 py-2">
          <div className="flex flex-row w-full truncate overflow-ellipsis">
          <div className="flex-none font-light text-xl mb-1" onDoubleClick={() => setIsSmall(!isSmall)}>{data.node.name}</div>
          <div className="flex-grow"></div>
          <div className="font-light mt-1 mb-1 text-xs cursor-pointer" onClick={() => setSelectorShow(true)}><Icons.Gear/></div>
          </div>
          <p className="text-gray-700 text-sm">{data.node.description}</p>

        </div>

        {!isSmall && 
        <>
        <div className={"px-2 py-2"}>
          <div className="grid grid-cols-2">
            <div className="w-full">
          <span className="font-light text-sm ml-2"> Args </span>
          <div className="grid grid-cols-1">
          {data.node.args?.map(arg => <div className="border m-1  py-0 px-1 rounded border-gray-200" data-tip={`${arg?.description}`} data-for={"tooltip_special" + id}><span className="text-xs">{argToTip(arg)}</span> {arg?.label}</div>)}
          </div>
          </div>
          <div className="w-full">
          <span className="font-light text-sm ml-2"> Returns </span>
          <div className="grid grid-cols-1">
          {data.node.returns?.map(re => <div className="border m-1 py-0 px-1 rounded border-gray-200" data-tip={`${re?.description}`} data-for={"tooltip_special" + id}><span className="text-xs">{reToTip(re)}</span> {re?.label} </div>)}
          </div>
          </div>
          </div>
          <span className="font-light text-sm ml-2"> Kwargs </span>
          <div className="flex">
          {data.node.kwargs?.map(kwarg => <div className="flex-1 border m-1 py-0 px-1 rounded border-gray-200" data-tip={`${kwarg?.description}`} data-for={"tooltip_special" + id}><span className="text-xs">{kwargToTip(kwarg)}</span> {kwarg?.label}</div>)}
          </div>
        </div>
        </>
        }
      </div>
      {data.node.kwargs?.map((kwarg, index, array) => (
        <Handle
          type="target"
          position={Position.Bottom}
          id={"kwarg_" + kwarg?.key}
          key={index}
          style={{ left: isSmall ? (index + 1) * 20 : Math.floor((index+0.5)*(1/array.length)*100) + "%", background: "#555", marginTop: 10 }}
          data-tip={`${kwarg?.label} ${kwargToTip(kwarg)}`}
          data-for={"tooltip" + id}
        >
        </Handle>
      ))}
      {data.node.args && data.node.args.length > 0 && (
        <Handle
          type="target"
          position={Position.Left}
          id={"args"}
          style={{ top: "50%", background: "#555" }}
          data-tip={data.node.args?.map(argToTip).join("|")}
          data-for={"tooltip" + id}
        />
      )}
      {data.node.returns && data.node.returns.length > 0 && (
        <Handle
          type="source"
          position={Position.Right}
          id={"returns"}
          style={{ top: "50%", background: "#555" }}
          data-tip={data.node.returns?.map(reToTip).join("|")}
          data-for={"tooltip" + id}
        />
      )}
    </>
  );
};
import { ArgPort, KwargPort, ReturnPort } from "./types";





export const argToTip = (arg: ArgPort) => {
    switch (arg?.__typename) {
      case "IntArgPort":
        return "int";
      case "ModelArgPort":
        return arg?.identifier;
      case "StringArgPort":
        return "str";
      default:
        return "fake";
    }
  };
  
  export const reToTip = (re: ReturnPort) => {
    switch (re?.__typename) {
      case "IntReturnPort":
        return "int";
      case "ModelReturnPort":
        return re?.identifier;
      case "StringReturnPort":
        return "str";
      default:
        return "fake";
    }
  };
  
  export const kwargToTip = (kwarg: KwargPort) => {
    switch (kwarg?.__typename) {
      case "IntKwargPort":
        return "int";
      case "ModelKwargPort":
        return kwarg?.identifier;
      case "StringKwargPort":
        return "str";
      default:
        return "fake";
    }
  };
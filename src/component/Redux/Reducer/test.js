import { useReducer } from "react";

export const testReducer=(state={
    text:""
},action)=>{
switch (action.type) {
    case "CHANGE":
        
    return {...action.payload}

    default:
        break;
}
}
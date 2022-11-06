import { useReducer } from "react";

export const tiketReducer = (
  state = {
    uuid: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_UUID":
      return { ...action.payload };

    default:
      return state;
  }
};

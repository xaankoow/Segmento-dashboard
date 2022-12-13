import { useReducer } from "react";

export const tiketReducer = (
  state = {
    allTicketsData:[],
    uuid: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_UUID":
      return { ...action.payload };
    case "GET_ALL_TICKETS_DATA":
      return { ...action.payload };

    default:
      return state;
  }
};

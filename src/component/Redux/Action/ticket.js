export const setTicketUUID = (show) => {
  return async (dispatch, getState) => {
    // debugger
    let state = { ...getState().ticketState };
    await dispatch({ type: "SET_UUID", payload: state });
  };
};

export const setShowLoadingRedux = (show) => {
    return async (dispatch, getState) => {
        let state = { ...getState().loadingState }
        state.showLoading = show;
        await dispatch({ type: "SHOW_LOADING", payload: state })
    }
}
export const setCanRequestRedux = (can) => {
    return async (dispatch, getState) => {
        let state = { ...getState().loadingState }
        state.canRequest = can;
        await dispatch({ type: "CAN_REQUEST", payload: state })
    }
}
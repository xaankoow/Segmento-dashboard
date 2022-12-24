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

export const addLoadingItem = (addItem) => {
    return async (dispatch, getState) => {

        let state = { ...getState().loadingState }
        state.ProcessingDelay.push(addItem);
        state.canRequest = false;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: state })
    }
}
export const removeLoadingItem = (removeItem) => {
    return async (dispatch, getState) => {

        let state = { ...getState().loadingState }
        var removeProcessingItem = state.ProcessingDelay.filter(item => item != removeItem);
        state.ProcessingDelay = removeProcessingItem;
        state.canRequest = removeProcessingItem.length > 0 ? false : true;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: state })
    }
}
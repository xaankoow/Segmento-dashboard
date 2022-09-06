export const changeingText = (show) => {



    return async (dispatch, getState) => {
        debugger
        let state = { ...getState().textState }
        await dispatch({ type: "CHANGE", payload: state })
    }
}
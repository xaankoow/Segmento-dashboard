export const changeingText = (show) => {



    return async (dispatch, getState) => {

        let state = { ...getState().textState }
        await dispatch({ type: "CHANGE", payload: state })
    }
}
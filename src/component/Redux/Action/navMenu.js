export const setCloseNav = (close) => {
    return async (dispatch, getState) => {
        let state = { ...getState().navMenuState }
        state.closeNav = close!=undefined? close: !state.closeNav;
        await dispatch({ type: "CLOSE_NAV", payload: state })
    }
}

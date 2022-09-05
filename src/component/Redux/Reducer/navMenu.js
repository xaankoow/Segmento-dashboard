export const navMenu = (state =
    {
        closeNav: true,
    }, action) => {
    switch (action.type) {
        case "CLOSE_NAV":
            return { ...action.payload }
      
        default:
            return state;
    }


}
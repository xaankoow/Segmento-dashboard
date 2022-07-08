export const loadingReducer = (state =
    {
        showLoading:false,
        canRequest:true
    }, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return { ...action.payload }
        case "CAN_REQUEST":
            return { ...action.payload }
       

        default:
            return state;
    }


}
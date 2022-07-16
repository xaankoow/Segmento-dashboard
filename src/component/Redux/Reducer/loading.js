export const loadingReducer = (state =
    {
        showLoading:false,
        ProcessingDelay:[],
        canRequest:true
    }, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return { ...action.payload }
        case "SET_PROCESSING_DELAY":
            return { ...action.payload }
        case "CAN_REQUEST":
            return { ...action.payload }
       

        default:
            return state;
    }


}
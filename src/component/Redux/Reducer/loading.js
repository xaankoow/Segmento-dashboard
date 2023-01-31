export const loadingReducer = (state =
    {
        showLoading: false,
        ImportantProcessingDelay:[], //locked screen,button and show segmento logi 
        ProcessingDelay: [], // locked button (using for the skeleton style)
        canRequest: true
    }, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return { ...action.payload }
        case "SET_IMPORTANT_PROCESSING_DELAY":
            return { ...action.payload }
        case "SET_PROCESSING_DELAY":
            return { ...action.payload }
        case "CAN_REQUEST":
            return { ...action.payload }
        case "RESET_ALL_STATE":
            return {
                showLoading: false,
                ImportantProcessingDelay:[],
                ProcessingDelay: [],
                canRequest: true
            }
        case "RESET_LOADING_STATE":
            return {
                showLoading: false,
                ImportantProcessingDelay:[],
                ProcessingDelay: [],
                canRequest: true
            }


        default:
            return state;
    }


}
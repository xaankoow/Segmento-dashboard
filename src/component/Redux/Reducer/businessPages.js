export const businessReducer = (state =
    {
        pagesData:[]// table data in business pages

    }, action) => {
    switch (action.type) {
        case "GET_ALL_BUSINESS_PAGES_DATA":
            return { ...action.payload }
        case "RESET_ALL_STATE":
            return {
                pagesData:[]

            }
        case "RESET_LOADING_STATE":
            return {
                pagesData:[]
            }


        default:
            return state;
    }


}
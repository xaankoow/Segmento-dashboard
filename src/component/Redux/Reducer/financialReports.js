export const financialReducer = (state =
    {
        allFinancialData:[],
        financialDataTable:[]
    }, action) => {
    switch (action.type) {
        case "GET_FINANCIAL_DATA":
            return { ...action.payload }
        case "SEARCH_FINANCIAL_DATA":
            return { ...action.payload }
        // case "CAN_REQUEST":
        //     return { ...action.payload }
       

        default:
            return state;
    }


}
export const rankTrakingReducer = (state =
    {
        workSpacePeriodData:[],
        chart:{type:"",data:[]}
    }, action) => {
    switch (action.type) {

        case "INIT_WORK_SPACE_PERIOD_DATA":
            return { ...action.payload }
            case "SET_BIG_CHART_DATA":
                return { ...action.payload }
        case "RESET_ALL_STATE":
            return {
                workSpacePeriodData:[]
            }
        case "RESET_PLAN_STATE":
            return {
                workSpacePeriodData:[]
            }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}
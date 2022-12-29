export const rankTrakingReducer = (
  state = {
    workSpacePeriodData: [],
    chart: { type: "", data: [] },
    bigChartData: [], //[{labels:[],label:"",data:[]}]
  },
  action
) => {
  switch (action.type) {
    case "INIT_WORK_SPACE_PERIOD_DATA":
      return { ...action.payload };
    case "SET_DATA_FROM_BIG_CHART":
      return { ...action.payload };

    case "RESET_ALL_STATE":
      return {
        workSpacePeriodData: [],
      };
    case "RESET_PLAN_STATE":
      return {
        workSpacePeriodData: [],
      };

    // case "RESET_STATE":
    //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

    default:
      return state;
  }
};

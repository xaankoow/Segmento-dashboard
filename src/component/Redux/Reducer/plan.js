export const planReducer = (state =
    {
        webAdress: "",
        charKey1: "",
        charKey2: "",
        site1: "",
        site2: "",
        commercialPage1: "",
        commercialPage2: "",
        planChosen: "",
        discount: "",
        packageUuid: "",
        forceUpdate: 0,
        planDetails: {},
        allPackageData: []
    }, action) => {
    switch (action.type) {

        case "MODAL_PLAN_GET_ALL_PLAN_DATA":
            return { ...action.payload }

        case "DISCOUNT_CODE":
            return { ...action.payload }

        case "MODAL_PLAN_WEB_ADRESS":
            return { ...action.payload }

        case "MODAL_PLAN_CHAR_KEY1":
            return { ...action.payload }

        case "MODAL_PLAN_CHAR_KEY2":
            return { ...action.payload }

        case "MODAL_PLAN_SITE1":
            return { ...action.payload }

        case "MODAL_PLAN_SITE2":
            return { ...action.payload }

        case "MODAL_PLAN_COMMERCIAL_PAGE1":
            return { ...action.payload }

        case "MODAL_PLAN_COMMERCIAL_PAGE2":
            return { ...action.payload }

        case "MODAL_PLAN_CHOSEN":
            return { ...action.payload }

        case "MODAL_PLAN_PACKAGE_UUID":
            return { ...action.payload }

        case "MODAL_PLAN_BUY_PLAN":
            return { ...action.payload }
        case "MODAL_PLAN_GET_PACKAGE_DETAILS":
            return { ...action.payload }

        case "MODAL_PLAN_FORCE_UPDATE":
            return { ...action.payload }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}
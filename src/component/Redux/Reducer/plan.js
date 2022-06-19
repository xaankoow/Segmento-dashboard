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
        forceUpdate: 0
    }, action) => {
    switch (action.type) {

        case "DISCOUNT_CODE":
            return { ...action.payload }

        case "PLAN_WEB_ADRESS":
            return { ...action.payload }

        case "CHAR_KEY1":
            return { ...action.payload }

        case "CHAR_KEY2":
            return { ...action.payload }

        case "SITE1":
            return { ...action.payload }

        case "SITE2":
            return { ...action.payload }

        case "COMMERCIAL_PAGE1":
            return { ...action.payload }

        case "COMMERCIAL_PAGE2":
            return { ...action.payload }

        case "PLAN_CHOSEN":
            return { ...action.payload }

        case "PACKAGE_UUID":
            return { ...action.payload }
            
            case "BUY_PLAN":
                return { ...action.payload }

        case "FORCE_UPDATE":
            return { ...action.payload }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}
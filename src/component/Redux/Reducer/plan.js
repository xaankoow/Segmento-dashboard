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
        discountStatus: { value: 10, planType: "" },
        packageUuid: "",
        forceUpdate: 0,
        planDetails: {},
        allPackageData: [],
        checkUseTryFree: false
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
        case "MODAL_PLAN_TRY_FREE":
            return { ...action.payload }
        case "MODAL_SET_WORK_SPACE_EASY_START":
            return { ...action.payload }
        case "MODAL_PLAN_GET_PACKAGE_DETAILS":
            return { ...action.payload }

        case "MODAL_PLAN_FORCE_UPDATE":
            return { ...action.payload }
        case "MODAL_PLAN_DISCOUNT_CODE":
            return { ...action.payload }
        case "RESET_ALL_STATE":
            return {
                webAdress: "",
                charKey1: "",
                charKey2: "",
                site1: "",
                site2: "",
                commercialPage1: "",
                commercialPage2: "",
                planChosen: "",
                discount: "",
                discountStatus: { value: 0, planType: "" },
                packageUuid: "",
                forceUpdate: 0,
                planDetails: {},
                allPackageData: [],
                checkUseTryFree: false
            }
        case "RESET_PLAN_STATE":
            return {
                webAdress: "",
                charKey1: "",
                charKey2: "",
                site1: "",
                site2: "",
                commercialPage1: "",
                commercialPage2: "",
                planChosen: "",
                discount: "",
                discountStatus: { value: 0, planType: "" },
                packageUuid: "",
                forceUpdate: 0,
                planDetails: {},
                allPackageData: [],
                checkUseTryFree: false
            }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}
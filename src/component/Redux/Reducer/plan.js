export const planReducer = (state =
    {
        discountCode:"",
        forceUpdate:0
    }, action) => {
    switch (action.type) {
        case "DISCOUNT_CODE":
            return { ...action.payload }

        // case "RESET_STATE":
        //     return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}
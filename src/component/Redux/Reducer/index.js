export const userReducer = (state =
    {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        auth1:"",
        auth2:"",
        auth3:"",
        auth4:"",
        forgotPasswordStep: 0,
        checkRegisterComplete: false,
        checkVerifyRegister: false,
        handleResendCode: true
    }, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return { ...action.payload }
        case "SET_NAME":
            return { ...action.payload }
        case "SET_EMAIL":
            return { ...action.payload }
        case "SET_PASSWORD":
            return { ...action.payload }
        case "SET_PASSWORD_CONFIRM":
            return { ...action.payload }
        case "REGISTER_USER":
            return { ...action.payload }
        case "LOGIN_USER":
            return { ...action.payload }
        case "SEND_CODE_EMAIL":
            return { ...action.payload }
        case "VERIFY_EMAIL":
            return { ...action.payload }
        case "VERIFY_EMAIL_FORGOT_PASSWORD":
            return { ...action.payload }
        case "SEND_CODE_EMAIL_FORGOTPASSWORD":
            return { ...action.payload }
        case "VERIFY_EMAIL_CHANGE_PASSWORD":
            return { ...action.payload }
        case "CHANGE_PASSWORD":
            return { ...action.payload }
        case "DISABLE_TIMER":
            return { ...action.payload }

        case "RESET_STATE":
            return { email: "", forgotPasswordStep: 0, checkRegisterComplete: false, checkVerifyRegister: false }

        default:
            return state;
    }


}
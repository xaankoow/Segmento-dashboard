export const userReducer = (
  state = {
    fullName: "",
    email: "",
    image: ([""]),
    password: "",
    passwordConfirm: "",
    auth1: "",
    auth2: "",
    auth3: "",
    auth4: "",
    forgotPasswordStep: 0,
    checkRegisterComplete: false,
    checkVerifyPhoneNumber: true,
    checkVerifyRegister: false,
    handleResendCode: true,
    forceUpdate: 0,
    userData: {},
  },
  action
) => {
  switch (action.type) {
    case "CORE_USER":
      return { ...action.payload };
    case "SET_AUTH":
      return { ...action.payload };
    case "SET_NAME":
      return { ...action.payload };
    case "SET_IMAGE":
      return { ...action.payload };
    case "SET_EMAIL":
      return { ...action.payload };
    case "SET_PASSWORD":
      return { ...action.payload };
    case "SET_PASSWORD_CONFIRM":
      return { ...action.payload };
    case "REGISTER_USER":
      return { ...action.payload };
    case "SET_REGISTER_COMPLETE_CHECK":
      return { ...action.payload };
    case "LOGIN_USER":
      return { ...action.payload };
    case "SEND_CODE_EMAIL":
      return { ...action.payload };
    case "VERIFY_EMAIL":
      return { ...action.payload };
    case "VERIFY_EMAIL_FORGOT_PASSWORD":
      return { ...action.payload };
    case "SEND_CODE_EMAIL_FORGOTPASSWORD":
      return { ...action.payload };
    case "VERIFY_EMAIL_CHANGE_PASSWORD":
      return { ...action.payload };
    case "CHANGE_PASSWORD":
      return { ...action.payload };
    case "DISABLE_TIMER":
      return { ...action.payload };
    case "FIND_USER":
      return { ...action.payload };
    case "LOG_OUT":
      return { ...action.payload };
    case "CHECK_PASS":
      return { ...action.payload };
    case "RESET_ALL_STATE":
      return {
        fullName: "",
        email: "",
        image: ([""]),
        password: "",
        passwordConfirm: "",
        auth1: "",
        auth2: "",
        auth3: "",
        auth4: "",
        forgotPasswordStep: 0,
        checkRegisterComplete: false,
        checkVerifyRegister: false,
        handleResendCode: true,
        forceUpdate: 0,
        userData: {}
      };
    case "RESET_USER_STATE":
      return {
        fullName: "",
        email: "",
        image: ([""]),
        password: "",
        passwordConfirm: "",
        auth1: "",
        auth2: "",
        auth3: "",
        auth4: "",
        forgotPasswordStep: 0,
        checkRegisterComplete: false,
        checkVerifyRegister: false,
        handleResendCode: true,
        forceUpdate: 0,
        userData: {}
      };

    default:
      return state;
  }
};

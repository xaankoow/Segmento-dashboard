import axios from "axios";
import { toast } from "react-toastify";
import {
  registerUser,
  loginUser,
  verifyEmail,
  checkVerifyEmail,
  verifyEmailChangePassword,
  logout,
  changePassword,
  checkVerifyEmailChangePassword,
  findUser,
  coreUserData,
} from "../../service/userService";
import { CheckFormat } from "../../Utils/Auth/CheckFormtValue";
import { handleNextInput } from "../../Utils/focusNextInput";
import { InputError } from "../../Utils/showInputError";
import { showInputErrorToast, showToast } from "../../Utils/toastifyPromise";
import { addLoadingItem, removeLoadingItem } from "./loading";
import { allLimitDataFeature, ChackBusinessCustomer } from "./workSpace";

// get all user data in api
export const coreUser = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };
    const workSpaceState = { ...getState().workSpaceState };
    let toastMessage = "";

    const token = localStorage.getItem("token");
    if (token !== "undefined" && token != null && token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    try {
      if (!loadingState.ImportantProcessingDelay.includes("coreUserData")) {
        //handle show loadin
        {
          loadingState.ImportantProcessingDelay =
            loadingState.ImportantProcessingDelay.filter(
              (item) => item != "coreUserData"
            );
          loadingState.ImportantProcessingDelay.push("coreUserData");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        const { data, status } = await coreUserData();
        if (status == 200 && data.status == true) {
          if (data.data.user != undefined) {
            state.userData = data.data;
            state.checkVerifyPhoneNumber =
              data.data.user.mobile == null ? false : true;
            workSpaceState.businessCustomer = {
              current:
                data.data.package.type_text != "پکیج پایه" ? true : false,
              last: data.data.user_has_success_purchase,
              // last: findSuccessReport != -1 ? true : false
            };
            // dispatch(allLimitDataFeature())
            await dispatch({
              type: "CHECK_BUSSINESS",
              payload: workSpaceState,
            });
            // await dispatch(ChackBusinessCustomer())
          } else {
            // localStorage.removeItem("token");
          }
        }
        //handle hide loading
        {
          const loadingState1 = { ...getState().loadingState };
          var removeProcessingItem =
            loadingState1.ImportantProcessingDelay.filter(
              (item) => item != "coreUserData"
            );
          loadingState1.ImportantProcessingDelay = removeProcessingItem;
          loadingState1.canRequest =
            removeProcessingItem.length > 0 ? false : true;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState1,
          });
        }
      }
    } catch (error) {
      error?.response?.data?.errors.forEach((element) => {
        toastMessage += element + " / ";
      });
      toastMessage != "" &&
        toast.warn(toastMessage, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      //handle hide loading
      {
        const loadingState2 = { ...getState().loadingState };
        var removeProcessingItem =
          loadingState2.ImportantProcessingDelay.filter(
            (item) => item != "coreUserData"
          );
        loadingState2.ImportantProcessingDelay = removeProcessingItem;
        loadingState2.canRequest =
          removeProcessingItem.length > 0 ? false : true;
        await dispatch({
          type: "SET_PROCESSING_DELAY",
          payload: loadingState2,
        });
      }
    }
    await dispatch({ type: "CORE_USER", payload: state });
  };
};

// set user data
export const setPropCoreUser = (prop, value) => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    switch (prop) {
      case "mobile":
        state.userData.user.mobile = value;
        break;

      default:
        break;
    }
    await dispatch({ type: "CORE_USER", payload: state });
  };
};

export const changeRegisterCompleteCheck = (value) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.checkRegisterComplete = value;
    await dispatch({ type: "SET_REGISTER_COMPLETE_CHECK", payload: state });
  };
};

//get validate code 4*
export const setAuth1Redux = (auth1) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.auth1 = auth1;
    handleNextInput(0);
    await dispatch({ type: "SET_AUTH", payload: state });
  };
};
export const setAuth2Redux = (auth2) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.auth2 = auth2;
    handleNextInput(4);
    await dispatch({ type: "SET_AUTH", payload: state });
  };
};
export const setAuth3Redux = (auth3) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.auth3 = auth3;
    handleNextInput(3);
    await dispatch({ type: "SET_AUTH", payload: state });
  };
};
export const setAuth4Redux = (auth4) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.auth4 = auth4;
    handleNextInput(2);
    await dispatch({ type: "SET_AUTH", payload: state });
  };
};

export const setImageProfRedux = (image) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.image = image;
    await dispatch({ type: "SET_IMAGE", payload: state });
  };
};

export const setNameRedux = (fullName) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.fullName = fullName;
    await dispatch({ type: "SET_NAME", payload: state });
  };
};

export const setEmailRedux = (email) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.email = email;
    await dispatch({ type: "SET_EMAIL", payload: state });
  };
};

export const setPasswordRedux = (password) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.password = password;
    await dispatch({ type: "SET_PASSWORD", payload: state });
  };
};

export const setPasswordConfirmRedux = (passwordConfirm) => {
  return async (dispatch, getState) => {
    let state = { ...getState().userState };
    state.passwordConfirm = passwordConfirm;
    await dispatch({ type: "SET_PASSWORD_CONFIRM", payload: state });
  };
};

// RESET STATE REDUX
export const resetStateRedux = () => {
  return async (dispatch) => {
    await dispatch({ type: "RESET_STATE" });
  };
};

// REGISTER USER
export const RegisterUserAction = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    if (
      state.fullName &&
      state.email &&
      state.password &&
      state.passwordConfirm
    ) {
      if (
        CheckFormat("fullName", state.fullName, "errRejesterFormatFullName") &&
        CheckFormat("email", state.email, "errRejesterFormatEmail") &&
        CheckFormat("password", state.password, "errRejesterPassword") &&
        CheckFormat(
          "passwordConfirm",
          { pass1: state.password, pass2: state.passwordConfirm },
          "errRejesterPasswordConfirm"
        )
      ) {
        // let toastPromiseRegister = toast.loading("درحال ارسال درخواست شما به سرور")

        //handle show loadin
        {
          loadingState.ProcessingDelay.push("registerUser");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        let toastMessage = "";
        try {
          let formdata = new FormData();
          formdata.append("name", state.fullName);
          formdata.append("email", state.email);
          formdata.append("password", state.password);
          formdata.append("password_confirmation", state.passwordConfirm);
          // let register_user =async () => {
          const { data, status } = await registerUser(formdata);

          if (status == 200 && data.status == true) {
            //handle show loadin
            {
              loadingState.ProcessingDelay.push("verifyEmail");
              loadingState.canRequest = false;
              await dispatch({
                type: "SET_PROCESSING_DELAY",
                payload: loadingState,
              });
            }

            showToast("به خانواده بزرگ زانکو خوش آمدید", "success");
            // toast.update(toastPromiseRegister, { render: "به خانواده بزرگ زانکو خوش آمدید", type: "success", isLoading: false, autoClose: 3000 })
            // let toastPromiseSendCode = toast.loading("درحال ارسال درخواست شما به سرور")
            state.email = state.email;
            state.checkRegisterComplete = true;
            // const navigate=useNavigate();
            // navigate("/ValidateEmail")
            // window.location.href = '/ValidateEmail';
            // const history =useHistory()
            // history.push("/ValidateEmail")
            // let send_code_email = async () => {
            await dispatch({ type: "REGISTER_USER", payload: state });
            const { data, status } = await verifyEmail(formdata);
            if (status == 200 && data.status == true) {
              showToast("کد به ایمیل شما ارسال شد", "success");
              // toast.update(toastPromiseSendCode, { render: "کد به ایمیل شما ارسال شد", type: "success", isLoading: false, autoClose: 3000 })
              // return Promise.resolve();
            } else {
              // return Promise.reject();
              data.errors.forEach((element) => {
                toastMessage += element + " / ";
              });
              showToast(toastMessage, "error");
              // toast.update(toastPromiseSendCode, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }
            // }
            // await dispatch({ type: "SEND_CODE_EMAIL", payload: state})
            // showPromisToast(send_code_email(),"sendCod")
            // return Promise.resolve()
            //
          } else {
            data.errors.forEach((element) => {
              toastMessage += element + " / ";
            });

            showToast(toastMessage, "error");
          }
        } catch (error) {
          let skipToast = false;
          error.response.data.errors.forEach((element) => {
            // toastMessage += element+ "\r\n";
            if (element == "این ایمیل قبلا ثبت شده") {
              InputError(
                "errRejesterFormatEmail",
                "کاربری با این ایمیل وجود دارد."
              );
              skipToast = true;
            }
            toastMessage += element + " / ";
          });
          !skipToast && showToast(toastMessage, "error");
        }

        await dispatch({ type: "REGISTER_USER", payload: state });
      }
    } else {
      showInputErrorToast();
    }

    //handle hide loading
    {
      var firstFilter = loadingState.ProcessingDelay.filter(
        (item) => item != "registerUser"
      );
      var removeProcessingItem = firstFilter.filter(
        (item) => item != "verifyEmail"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

//LOGIN USER
export const loginUserAction = () => {
  return async (dispatch, getState) => {
    //
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    if (state.email && state.password) {
      if (
        CheckFormat("email", state.email, "errRejesterFormatEmail") &&
        CheckFormat("loginPass", state.password, "errRejesterPassword")
      ) {
        // let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

        //handle show loadin
        {
          loadingState.ProcessingDelay.push("loginUser");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        let formdata = new FormData();
        formdata.append("email", state.email);
        formdata.append("password", state.password);

        let toastMessage = "";
        try {
          const { data, status } = await loginUser(formdata);
          state.checkRegisterComplete = false;

          if (data.code === 200) {
            state.userData = data.data.user;
            localStorage.setItem("token", data.data.token);
            state.forceUpdate += 1;
          } else if (data.code === 205) {
            //handle show loadin
            // if (
            //   !loadingState.ProcessingDelay.includes(
            //     "verifyEmail"
            //   )
            // ) {
              // dispatch(addLoadingItem("verifyEmail"));
              state.checkRegisterComplete = true;
              // let formdata1 = new FormData();
              // formdata1.append("email", state.email);
              // formdata1.append("password", state.password);
              // const { data, status } = await verifyEmail(formdata1);
              // if (status == 200 && data.status == true) {
              //   state.checkRegisterComplete = true;
              //   showToast("کد به ایمیل شما ارسال شد", "success");
              //   await dispatch({ type: "SEND_CODE_EMAIL", payload: state });
              // } else {
              //   data.errors.forEach((element) => {
              //     toastMessage += element + " / ";
              //   });
              //   showToast(toastMessage, "error");
              // }
              //handle hide loading
              dispatch(removeLoadingItem("verifyEmail"));
            // }
          }
          if (!data.status && data.code != 205) {
            data.errors.forEach((element) => {
              toastMessage += element + " / ";
            });
            showToast(toastMessage, "error");
          }
        } catch (error) {
          if (error.response.data.code == 404) {
            InputError(
              "errRejesterFormatEmail",
              "ایمیل یا گذرواژه اشتباه است."
            );
          } else {
            error.response.data.errors.forEach((element) => {
              toastMessage += element + " / ";
            });
            showToast(toastMessage, "error");
          }
        }
        await dispatch({ type: "LOGIN_USER", payload: state });
      }
    } else {
      showInputErrorToast();
    }

    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "loginUser"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

//SEND EMAIL COD
export const sendCodEmailAction = (email, demoResolve) => {
  return async (dispatch, getState) => {
    // const toastPromiseSendCode = toast.loading("درحال ارسال درخواست شما به سرور")
    const toastMessage = "";
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    const internal_email = state.email;
    if (internal_email) {
      if (CheckFormat("email", state.email, "errRejesterFormatEmail")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("verifyEmail");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        // let state = { ...getState().userState }
        let formdata = new FormData();
        formdata.append("email", internal_email);
        // let send_code_email = async () => {
        const { data, status } = await verifyEmail(formdata);

        if (status == 200 && data.status == true) {
          // state.forgotPasswordStep=1;
          await dispatch({ type: "SEND_CODE_EMAIL", payload: state });
          showToast("کد به ایمیل شما ارسال شد", "success");
          // toast.update(toastPromiseSendCode, { render: "کد به ایمیل شما ارسال شد", type: "success", isLoading: false, autoClose: 3000 })
        } else {
          data.errors.forEach((element) => {
            toastMessage += element + " / ";
          });
          showToast(toastMessage, "error");
          if (demoResolve && demoResolve == true) {
            state.forgotPasswordStep = 1;
            await dispatch({ type: "SEND_CODE_EMAIL", payload: state });
          }
        }
      }
    } else {
      showInputErrorToast();
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "verifyEmail"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

//CHECK EMAIL COD
export const checkVerifyEmailAction = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    const internal_email = state.email;
    const internal_auth1 = state.auth1;
    const internal_auth2 = state.auth2;
    const internal_auth3 = state.auth3;
    const internal_auth4 = state.auth4;

    if (
      internal_email &&
      internal_auth1 &&
      internal_auth2 &&
      internal_auth3 &&
      internal_auth4
    ) {
      //handle show loadin
      {
        loadingState.ProcessingDelay.push("checkVerifyEmail");
        loadingState.canRequest = false;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }

      let toastMessage = "";
      try {
        // const code = internal_auth1 + internal_auth2 + internal_auth3 + internal_auth4;
        const code =
          internal_auth4 + internal_auth3 + internal_auth2 + internal_auth1;
        let formdata = new FormData();
        formdata.append("code", code);
        formdata.append("email", internal_email);
        const { data, status } = await checkVerifyEmail(formdata);
        //
        if (status == 200 && data.status == true) {
          state.forgotPasswordStep = 2;
          state.checkVerifyRegister = true;
          //login
          let formdata_login = new FormData();
          formdata_login.append("email", state.email);
          formdata_login.append("password", state.password);
          const { data, status } = await loginUser(formdata_login);
          if (status == 200 && data.status == true) {
            localStorage.setItem("token", data.data.token);
            state.forceUpdate += 1;
          } else {
            data.errors.forEach((element) => {
              toastMessage += element + " / ";
            });
            showToast(toastMessage, "error");
          }
        } else {
          data.errors.forEach((element) => {
            toastMessage += element + " / ";
          });
          showToast(toastMessage, "error");
        }
      } catch (error) {
        error.response.data.errors.forEach((element) => {
          toastMessage += element + " / ";
        });
        showToast(toastMessage, "error");
        // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
      }

      await dispatch({ type: "VERIFY_EMAIL", payload: state });
    } else {
      showInputErrorToast();
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "checkVerifyEmail"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

//CHECK EMAIL COD
export const checkVerifyEmailForgotPasswordAction = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    const internal_email = state.email;
    const internal_auth1 = state.auth1;
    const internal_auth2 = state.auth2;
    const internal_auth3 = state.auth3;
    const internal_auth4 = state.auth4;

    if (
      internal_email &&
      internal_auth1 &&
      internal_auth2 &&
      internal_auth3 &&
      internal_auth4
    ) {
      if (CheckFormat("email", state.email, "errRejesterFormatEmail")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("checkVerifyEmailChangePassword");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }
        // const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
        let toastMessage = "";
        try {
          const code =
            internal_auth4 + internal_auth3 + internal_auth2 + internal_auth1;
          let formdata = new FormData();
          formdata.append("code", code);
          formdata.append("email", internal_email);
          // let check_verify_email = async () => {
          const { data, status } = await checkVerifyEmailChangePassword(
            formdata
          );
          //
          if (status == 200 && data.status == true) {
            state.forgotPasswordStep = 2;
            state.checkVerifyRegister = true;
            // toast.update(toastPromise, { render: "اعتبار سنجی ایمیل انجام شد", type: "success", isLoading: false, autoClose: 3000 })
            // return Promise.resolve();
          } else {
            // return Promise.reject();
            data.errors.forEach((element) => {
              toastMessage += element + " / ";
            });
            showToast(toastMessage, "error");
            // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
          }
          // }
          // showPromisToast(check_verify_email(),"checkVerifyEmail")
        } catch (error) {
          if (error.response.data.code == 404) {
            InputError("authVerifyCodeList", "کد فعال‌سازی اشتباه است.");
          } else {
            error.response.data.errors.forEach((element) => {
              toastMessage += element + " / ";
            });
            showToast(toastMessage, "error");
          }
        }

        await dispatch({
          type: "VERIFY_EMAIL_FORGOT_PASSWORD",
          payload: state,
        });
      }
    } else {
      showInputErrorToast();
    }

    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "checkVerifyEmailChangePassword"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

//SEND EMAIL COD FOR FORGOT PASSWORD SECTION
export const sendForgotPasswordEmailCodeAction = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    const stateEmail = state.email;

    if (stateEmail) {
      if (CheckFormat("email", state.email, "errRejesterFormatEmail")) {
        if (!state.handleResendCode == false) {
          //handle show loadin
          if (
            !loadingState.ProcessingDelay.includes("verifyEmailChangePassword")
          ) {
            {
              loadingState.ProcessingDelay.push("verifyEmailChangePassword");
              loadingState.canRequest = false;
              await dispatch({
                type: "SET_PROCESSING_DELAY",
                payload: loadingState,
              });
            }

            var toastMessage = "";
            try {
              let formdata = new FormData();
              formdata.append("email", stateEmail);
              const { data, status } = await verifyEmailChangePassword(
                formdata
              );
              if (status == 200 && data.status == true) {
                state.forgotPasswordStep = 1;
                state.handleResendCode = false;
                setTimeout(() => {
                  let state = { ...getState().userState };
                  state.handleResendCode = true;
                  dispatch({ type: "DISABLE_TIMER", payload: state });
                }, 120000);
                showToast("کد به ایمیل شما ارسال شد", "success");
                await dispatch({
                  type: "SEND_CODE_EMAIL_FORGOTPASSWORD",
                  payload: state,
                });
              } else {
                data.errors.forEach((element) => {
                  toastMessage += element;
                });
                showToast(toastMessage, "error");
              }
            } catch (error) {
              if (error.response.data.code == 404) {
                InputError(
                  "errRejesterFormatEmail",
                  "کاربری با این ایمیل وجود ندارد."
                );
              } else {
                error.response.data.errors.forEach((element) => {
                  toastMessage += element + ".";
                });
                showToast(toastMessage, "error");
              }
            }
          }
        } else {
          showInputErrorToast("کد قبلا ارسال شده");
        }
      }
    } else {
      showInputErrorToast();
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "verifyEmailChangePassword"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

//CHANGE USER PASSWORD
export const changePasswordAction = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    const internal_email = state.email;
    const internal_auth1 = state.auth1;
    const internal_auth2 = state.auth2;
    const internal_auth3 = state.auth3;
    const internal_auth4 = state.auth4;
    const internal_password = state.password;
    const internal_password_confirmation = state.passwordConfirm;

    // const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

    const toastMessage = "";

    if (
      internal_email &&
      internal_auth1 &&
      internal_auth2 &&
      internal_auth3 &&
      internal_auth4 &&
      internal_password &&
      internal_password_confirmation
    ) {
      if (
        CheckFormat("email", state.email, "errRejesterFormatEmail") &&
        CheckFormat("password", state.password, "errRejesterPassword") &&
        CheckFormat(
          "passwordConfirm",
          { pass1: state.password, pass2: state.passwordConfirm },
          "errRejesterPasswordConfirm"
        )
      ) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("changePassword");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        const code =
          internal_auth4 + internal_auth3 + internal_auth2 + internal_auth1;

        let formdata = new FormData();
        formdata.append("email", internal_email);
        formdata.append("password", internal_password);
        formdata.append(
          "password_confirmation",
          internal_password_confirmation
        );
        formdata.append("code", code);
        try {
          const { data, status } = await changePassword(formdata);

          if (status == 200 && data.status == true) {
            showToast("رمز عبور با موفقیت تغییر کرد", "success");
            state.forceUpdate += 1;
            state.handleResendCode = true;
            state.forgotPasswordStep = 0;
            localStorage.setItem("CHECNGEPASSWORD_COMPLETE", true);
            // toast.update(toastPromise, { render: "رمز عبور با موفقیت تغییر کرد", type: "success", isLoading: false, autoClose: 3000 })
          } else {
            data.errors.forEach((element) => {
              toastMessage += element;
            });
            showToast(toastMessage, "error");
            // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
          }

          await dispatch({ type: "CHANGE_PASSWORD", payload: state });
        } catch (error) {
          error.response.data.errors.forEach((element) => {
            toastMessage += element;
          });
          showToast(toastMessage, "error");
          // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        }
      }
    } else {
      showInputErrorToast();
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "changePassword"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

export const logoutAction = () => {
  return async (dispatch, getState) => {
    // const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

    const state = { ...getState().userState };

    localStorage.removeItem("token");
    state.userData = "";
    // document.cookie = "user_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // document.cookie = "user_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    state.forceUpdate += 1;
    // toast.update(toastPromise, { render: "از حساب خود خارج شدید", type: "success", isLoading: false, autoClose: 3000 })
    await dispatch({ type: "RESET_ALL_STATE" });
    // await dispatch({ type: "LOG_OUT" })
  };
};

export const findUserAction = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().userState };

    const internal_user = state.user;
    const token = localStorage.getItem("userId");

    // if (internal_user) {

    // }else{
    if (token != "undefined" && token != null) {
      try {
        const dd = await findUser(token);
        //

        // if (status == 200 && data.status == true) {
        //
        //     console.log("find user")
        //     // toast.update(toastPromise, { render: "وارد حساب کاربری شدید", type: "success", isLoading: false, autoClose: 3000 })
        // } else {
        //     // data.errors.forEach(element => {
        //     //     toastMessage += element;
        //     // });
        //     // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        //     console.log(data.errors)
        // }

        await dispatch({ type: "FIND_USER", payload: state });
      } catch (error) {
        // error.response.data.errors.forEach(element => {
        //     toastMessage += element;
        // });
        // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        // console.log(error)
      }
    }
  };

  // }
};

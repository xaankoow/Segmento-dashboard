import { toast } from "react-toastify";
import { registerUser, loginUser, verifyEmail, checkVerifyEmail, verifyEmailChangePassword, logout, changePassword, checkVerifyEmailChangePassword } from "../../service/userService"
import { handleNextInput } from "../../Utils/focusNextInput";
import { showInputErrorToast, showPromisToast } from "../../Utils/toastifyPromise";




export const setAuth1Redux = (auth1) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.auth1 = auth1;
        handleNextInput(0)
        await dispatch({ type: "SET_AUTH", payload: state })
    }
}
export const setAuth2Redux = (auth2) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.auth2 = auth2;
        handleNextInput(4)
        await dispatch({ type: "SET_AUTH", payload: state })
    }
}
export const setAuth3Redux = (auth3) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.auth3 = auth3;
        handleNextInput(3)
        await dispatch({ type: "SET_AUTH", payload: state })
    }
}
export const setAuth4Redux = (auth4) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.auth4 = auth4;
        handleNextInput(2)
        await dispatch({ type: "SET_AUTH", payload: state })
    }
}

export const setNameRedux = (fullName) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.fullName = fullName;
        await dispatch({ type: "SET_NAME", payload: state })
    }
}

export const setEmailRedux = (email) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.email = email;
        await dispatch({ type: "SET_EMAIL", payload: state })
    }
}
export const setPasswordRedux = (password) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.password = password;
        await dispatch({ type: "SET_PASSWORD", payload: state })
    }
}

export const setPasswordConfirmRedux = (passwordConfirm) => {
    return async (dispatch, getState) => {
        let state = { ...getState() }
        state.passwordConfirm = passwordConfirm;
        await dispatch({ type: "SET_PASSWORD_CONFIRM", payload: state })
    }
}

// RESET STATE REDUX
export const resetStateRedux = () => {
    return async (dispatch) => {
        await dispatch({ type: "RESET_STATE" })
    }
}


// REGISTER USER
export const registerUserAction = () => {
    return async (dispatch, getState) => {
        const state = { ...getState() }

        if (state.fullName && state.email && state.password && state.passwordConfirm) {
            let toastPromiseRegister = toast.loading("درحال ارسال درخواست شما به سرور")
            let toastMessage = "";
            try {

                let formdata = new FormData();
                formdata.append("name", state.fullName)
                formdata.append("email", state.email)
                formdata.append("password", state.password)
                formdata.append("password_confirmation", state.passwordConfirm)

                // let register_user =async () => {
                const { data, status } = await registerUser(formdata);

                if (status == 200 && data.status == true) {
                    toast.update(toastPromiseRegister, { render: "به خانواده بزرگ زانکو خوش آمدید", type: "success", isLoading: false, autoClose: 3000 })
                    let toastPromiseSendCode = toast.loading("درحال ارسال درخواست شما به سرور")
                    state.email = state.email;
                    state.checkRegisterComplete = true;
                    // let send_code_email = async () => {
                    const { data, status } = await verifyEmail(formdata);
                    if (status == 200 && data.status == true) {
                        toast.update(toastPromiseSendCode, { render: "کد به ایمیل شما ارسال شد", type: "success", isLoading: false, autoClose: 3000 })
                        // return Promise.resolve();
                    } else {
                        // return Promise.reject();
                        data.errors.forEach(element => {
                            toastMessage += element + " / ";;
                        });
                        toast.update(toastPromiseSendCode, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                    }
                    // }
                    // await dispatch({ type: "SEND_CODE_EMAIL", payload: state})
                    // showPromisToast(send_code_email(),"sendCod")
                    // return Promise.resolve()
                } else {
                    data.errors.forEach(element => {
                        toastMessage += element + " / ";;
                    });
                    toast.update(toastPromiseRegister, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                    // return Promise.reject()
                }
            } catch (error) {
                console.log("register error")
                error.response.data.errors.forEach(element => {
                    // toastMessage += element+ "\r\n";
                    toastMessage += element + " / ";
                });
                toast.update(toastPromiseRegister, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }

            // }
            // showPromisToast(register_user(),"registerUser")
            await dispatch({ type: "REGISTER_USER", payload: state })
        } else {
            showInputErrorToast();
        }
    }
}


//LOGIN USER
export const loginUserAction = () => {
    return async (dispatch, getState) => {
        //  
        const state = { ...getState() }
        if (state.email && state.password) {
            let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

            let formdata = new FormData();
            formdata.append("email", state.email)
            formdata.append("password", state.password)

            let toastMessage = "";
            try {

                const { data, status } = await loginUser(formdata);
                if (status == 200 && data.status == true) {

                    // Navigate("/dashboard");
                    // const json=JSON.parse(data.data.user)
                    localStorage.setItem("token", data.data.token);
                    // localStorage.setItem("user", json);
                    toast.update(toastPromise, { render: "با موفقیت وارد شدید", type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    data.errors.forEach(element => {
                        toastMessage += element + " / ";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }
        }else {
            // debugger
            showInputErrorToast();
        }

        await dispatch({ type: "LOGIN_USER", payload: { ...getState() } })
    }
}

//SEND EMAIL COD
export const sendCodEmailAction = (email, demoResolve) => {
    return async (dispatch, getState) => {

        if (email) {
            let state = { ...getState() }
            let formdata = new FormData();
            formdata.append("email", email)
            let send_code_email = async () => {
                const { data, status } = await verifyEmail(formdata);

                if (status == 200 && data.status == true) {
                    // state.forgotPasswordStep=1;
                    await dispatch({ type: "SEND_CODE_EMAIL", payload: state })
                    return Promise.resolve()
                } else {
                    if (demoResolve && demoResolve == true) {
                        state.forgotPasswordStep = 1;
                        await dispatch({ type: "SEND_CODE_EMAIL", payload: state })
                        return Promise.resolve()

                    } else {

                        return Promise.reject();
                    }
                }
            }
            showPromisToast(send_code_email(), "sendCod")
        }
        else {
            showInputErrorToast();
        }
    }
}


//CHECK EMAIL COD 
export const checkVerifyEmailAction = () => {
    return async (dispatch, getState) => {
        const state = { ...getState() }

        const internal_email = state.email;
        const internal_auth1 = state.auth1;
        const internal_auth2 = state.auth2;
        const internal_auth3 = state.auth3;
        const internal_auth4 = state.auth4;


        if (internal_email && internal_auth1 && internal_auth2 && internal_auth3 && internal_auth4) {

            const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
            let toastMessage = "";
            try {
                const code = internal_auth1 + internal_auth2 + internal_auth3 + internal_auth4;
                let formdata = new FormData();
                formdata.append("code", code)
                formdata.append("email", internal_email)
                // let check_verify_email = async () => {
                const { data, status } = await checkVerifyEmail(formdata);
                //  
                if (status == 200 && data.status == true) {
                    state.forgotPasswordStep = 2;
                    state.checkVerifyRegister = true;
                    toast.update(toastPromise, { render: "اعتبار سنجی ایمیل انجام شد", type: "success", isLoading: false, autoClose: 3000 })
                    // return Promise.resolve();
                } else {
                    // return Promise.reject();
                    data.errors.forEach(element => {
                        toastMessage += element + " / ";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }
                // }
                // showPromisToast(check_verify_email(),"checkVerifyEmail")
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })

            }


            await dispatch({ type: "VERIFY_EMAIL", payload: state })
        }
        else {
            showInputErrorToast();
        }
    }
}




//CHECK EMAIL COD 
export const checkVerifyEmailForgotPasswordAction = () => {
    return async (dispatch, getState) => {
        const state = { ...getState() }

        const internal_email = state.email;
        const internal_auth1 = state.auth1;
        const internal_auth2 = state.auth2;
        const internal_auth3 = state.auth3;
        const internal_auth4 = state.auth4;


        if (internal_email && internal_auth1 && internal_auth2 && internal_auth3 && internal_auth4) {

            const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
            let toastMessage = "";
            try {
                const code = internal_auth1 + internal_auth2 + internal_auth3 + internal_auth4;
                let formdata = new FormData();
                formdata.append("code", code)
                formdata.append("email", internal_email)
                // let check_verify_email = async () => {
                const { data, status } = await checkVerifyEmailChangePassword(formdata);
                //  
                if (status == 200 && data.status == true) {
                    state.forgotPasswordStep = 2;
                    state.checkVerifyRegister = true;
                    toast.update(toastPromise, { render: "اعتبار سنجی ایمیل انجام شد", type: "success", isLoading: false, autoClose: 3000 })
                    // return Promise.resolve();
                } else {
                    // return Promise.reject();
                    data.errors.forEach(element => {
                        toastMessage += element + " / ";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }
                // }
                // showPromisToast(check_verify_email(),"checkVerifyEmail")
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element + " / ";
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })

            }


            await dispatch({ type: "VERIFY_EMAIL_FORGOT_PASSWORD", payload: state })
        }
        else {
            showInputErrorToast();
        }
    }
}


//SEND EMAIL COD FOR FORGOT PASSWORD SECTION
export const sendForgotPasswordEmailCodeAction = () => {
    return async (dispatch, getState) => {

        const state = { ...getState() }
        
        const stateEmail = state.email;

        if (stateEmail) {

            if (!state.handleResendCode == false) {

                const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

                var toastMessage = "";
                try {
                    
                    let formdata = new FormData();
                    formdata.append("email", stateEmail)
                    const { data, status } = await verifyEmailChangePassword(formdata);
                    // let send_code_email_forgotPassword = async () => {
                        if (status == 200 && data.status == true) {
                            state.forgotPasswordStep = 1;
                            state.handleResendCode = false;
                            setTimeout(() => {
                            let state = { ...getState() }
                            state.handleResendCode = true;
                            dispatch({ type: "DISABLE_TIMER", payload: state })
                        }, 5000);
                        toast.update(toastPromise, { render: "کد به ایمیل شما ارسال شد", type: "success", isLoading: false, autoClose: 3000 })
                        await dispatch({ type: "SEND_CODE_EMAIL_FORGOTPASSWORD", payload: state })
                        // return Promise.resolve()
                    } else {
                        // return Promise.reject();
                        data.errors.forEach(element => {
                            toastMessage += element;
                        });
                        toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                    }
                    // }
                    //  
                    // const dd=data.error[0]
                    // showPromisToast(send_code_email_forgotPassword(),data.error[0])
                } catch (error) {
                    // debugger
                    error.response.data.errors.forEach(element => {
                        toastMessage += element + ".";
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })

                }

                // showPromisToast(send_code_email_forgotPassword(),"sendCod")
            }
            else {
                showInputErrorToast("کد قبلا ارسال شده");
            }
        } else {
            showInputErrorToast();
        }
    }
}


//CHANGE USER PASSWORD 
export const changePasswordAction = () => {
    return async (dispatch, getState) => {

        const state = { ...getState() }


        const internal_email = state.email;
        const internal_auth1 = state.auth1;
        const internal_auth2 = state.auth2;
        const internal_auth3 = state.auth3;
        const internal_auth4 = state.auth4;
        const internal_password = state.password;
        const internal_password_confirmation = state.passwordConfirm;


        const toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

        const toastMessage = "";

        if (internal_email && internal_email && internal_auth1 && internal_auth2 && internal_auth3 && internal_auth4 && internal_password && internal_password_confirmation) {

            const code = internal_auth1 + internal_auth2 + internal_auth3 + internal_auth4;
            let formdata = new FormData();
            formdata.append("email", internal_email)
            formdata.append("password", internal_password)
            formdata.append("password_confirmation", internal_password_confirmation)
            formdata.append("code", code)
            try {
                const { data, status } = await changePassword(formdata);

                if (status == 200 && data.status == true) {
                    // localStorage.removeItem("token")
                    toast.update(toastPromise, { render: "رمز عبور با موفقیت تغییر کرد", type: "success", isLoading: false, autoClose: 3000 })
                } else {
                    data.errors.forEach(element => {
                        toastMessage += element;
                    });
                    toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
                }


                await dispatch({ type: "CHANGE_PASSWORD", payload: state })
            } catch (error) {
                error.response.data.errors.forEach(element => {
                    toastMessage += element;
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }
        }
        else {
            showInputErrorToast();
        }

    }
}
export const logoutAction = () => {
    return async (dispatch, getState) => {
        let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")

        let toastMessage = "";

        let state = { ...getState() }

        try {
            const { data, status } = await logout();

            if (status == 200 && data.status == true) {
                localStorage.removeItem("token")
                toast.update(toastPromise, { render: "از حساب خود خارج شدید", type: "success", isLoading: false, autoClose: 3000 })
            } else {
                data.errors.forEach(element => {
                    toastMessage += element;
                });
                toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
            }


        } catch (error) {
            error.response.data.errors.forEach(element => {
                toastMessage += element;
            });
            toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        }

        await dispatch({ type: "CHANGE_PASSWORD", payload: state })
    }
}
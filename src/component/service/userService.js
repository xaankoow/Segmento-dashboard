import http from './httpService'
import config from './config.json'

export const registerUser = user => {
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data'
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/register`,user, headerRegisterUser);
}

export const loginUser = user => {
    const headerLoginUser = {
        "type": "noauth",
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/login`,user, headerLoginUser);
}

export const verifyEmail = email => {
    const headerVerifyEmail = {
        "type": "noauth",
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/email/verify/resend`,email, headerVerifyEmail);
}

export const checkVerifyEmail = emailCod => {
    const headerCheckVerifyEmail = {
        "type": "noauth",
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/verifyEmail`,emailCod, headerCheckVerifyEmail);
}

export const verifyEmailChangePassword = email => {
    const headerCheckVerifyEmail = {
        "type": "noauth",
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/forgot-password`,email, headerCheckVerifyEmail);
}
export const checkVerifyEmailChangePassword = emailCode => {
    const headerCheckVerifyEmail = {
        "type": "noauth",
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/verifyCode`,emailCode, headerCheckVerifyEmail);
}

export const changePassword = user => {
    const headerCheckVerifyEmail = {
        "type": "noauth",
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/change-password`,user, headerCheckVerifyEmail);
}

export const logout = () => {
    return http.post(`${config.xaankooApi}/api/v1/auth/logout`);
}
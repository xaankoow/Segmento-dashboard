import http from './httpService'
import config from './config.json'

export const changePhoneNumber = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/changePhoneNumber`,datas, headerRegisterUser);
}
export const verifyPhoneNumber = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/auth/verifyPhoneNumber`,datas, headerRegisterUser);
}
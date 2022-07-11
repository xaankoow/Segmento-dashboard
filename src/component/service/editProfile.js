import http from './httpService'
import config from './config.json'


export const editProfile = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/profile/update`,datas, headerRegisterUser);
}
export const getSelectBoxData = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/profile/getData`);
}
export const editPassword = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/profile/updatePassword`,datas, headerRegisterUser);
}


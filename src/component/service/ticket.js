import http from './httpService'
import config from './config.json'


export const setNewTicket = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.post(`${config.xaankooApi}/api/v1/ticket`,datas, headerRegisterUser);
}


export const getAllTiket = (datas) => {
    
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.get(`${config.xaankooApi}/api/v1/ticket`, headerRegisterUser);
}

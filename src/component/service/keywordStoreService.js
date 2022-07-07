import http from './httpService'
import config from './config.json'


export const keywordsStoreService = datas => {
       const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/keyword`,datas, headerRegisterUser);
}
export const keywordsGetService = datas => {
        const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/keyword`,datas, headerRegisterUser);
}


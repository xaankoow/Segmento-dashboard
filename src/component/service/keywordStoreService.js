import http from './httpService'
import config from './config.json'


export const keywordsStoreService = (id) => {
       const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/keyword/suggests/store/${id}`);
}
export const keywordsGetService = datas => {
        const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/keyword`,datas, headerRegisterUser);
}


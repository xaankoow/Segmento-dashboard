import http from './httpService'
import config from './config.json'


export const ContentProductionStoreService = datas => {
   
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/word-batch`,datas, headerRegisterUser);
}
export const ContentProductionGetService = datas => {
    
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/word-batch`,datas, headerRegisterUser);
}


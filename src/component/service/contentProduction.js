import http from './httpService'
import config from './config.json'


export const ContentProductionService = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.post(`${config.xaankooApi}/api/v1/word-batch/generate`,datas, headerRegisterUser);
}

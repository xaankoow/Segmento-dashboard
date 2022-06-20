import http from './httpService'
import config from './config.json'

export const checkDetailUuid = uuid => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/payment/${uuid}`);
}
import http from './httpService'
import config from './config.json'

export const applyDiscount = discountToken => {
    const headerRegisterUser = {
        "Accept": "application/json",
        "workspace":"text/plain",
        'Content-Type': 'multipart/form-data',
        "type": "noauth"
    }
    return http.post(`${config.xaankooApi}/discount/check`,discountToken, headerRegisterUser);
}
import http from './httpService'
import config from './config.json'

export const applyDiscount = discountToken => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/discount/check`,discountToken, headerRegisterUser);
}
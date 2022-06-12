import http from './httpService'
import config from './config.json'

export const applyDiscount = discountToken => {
    const headerRegisterUser = {
        "Accept": "application/json",
        "workspace":"text/plain",
    }
    return http.post(`${config.xaankooApi}/api/v1/discount/check`,discountToken, headerRegisterUser);
}
export const buyPlna = packageInfo => {
    const headerRegisterUser = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/payment/pay`,packageInfo, headerRegisterUser);
}
// export const applyDiscount = discountToken => {
//     const headerRegisterUser = {
//         "Accept": "application/json",
//         "workspace":"text/plain",
//     }
//     return http.post(`${config.xaankooApi}/api/v1/discount/check`,discountToken, headerRegisterUser);
// }
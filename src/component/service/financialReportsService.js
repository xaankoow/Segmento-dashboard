import http from './httpService'
import config from './config.json'

export const getAllFinancialReportsData = () => {
    // const headerRegisterUser = {
    //     "Accept": "application/json"
    // }
    return http.post(`${config.xaankooApi}/api/v1/payment `);
}
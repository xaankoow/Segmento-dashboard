import http from './httpService'
import config from './config.json'

export const getBusinessPagesDataService = (axiosController) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain",
        signal: axiosController!=undefined&&axiosController.signal
    }
    return http.get(`${config.xaankooApi}/api/v1/page`, headerRegisterUser);
}     
import http from './httpService'
import config from './config.json'



export const getPackageInfO = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
   
    return http.get(`${config.xaankooApi}/api/v1/package/${datas}`);
}
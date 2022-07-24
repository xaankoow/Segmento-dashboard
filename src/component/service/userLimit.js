import http from './httpService'
import config from './config.json'


export const usetLimit = datas => {
    //7
    const limitOfUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
   
    return http.get(`${config.xaankooApi}/api/v1/profile/limits`);
}
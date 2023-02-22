import http from './httpService'
import config from './config.json'


export const userLimit = ({axiosController}) => {
    //7
    const limitOfUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json",
        signal: axiosController!=undefined&&axiosController.signal
    }
   
    return http.get(`${config.xaankooApi}/api/v1/profile/limits`,limitOfUser);
}
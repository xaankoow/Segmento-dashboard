import http from './httpService'
import config from './config.json'



export const getPackageInfO = ({package_uuid,axiosController}) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json",
        signal: axiosController!=undefined&&axiosController.signal
    }
//    console.log('package_uuid :>> ', package_uuid);
    return http.get(`${config.xaankooApi}/api/v1/package/${package_uuid}`,headerRegisterUser);
}
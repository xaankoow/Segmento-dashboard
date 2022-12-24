import http from './httpService'
import config from './config.json'

export const initWorkSpacePeriodDataService = ({workspaceUuid,period,axiosController}) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain",
        signal: axiosController!=undefined&&axiosController.signal
    }
    return http.post(`${config.xaankooApi}/api/v1/report/workspace`,{workspaceUuid,period}, headerRegisterUser);
}
import http from './httpService'
import config from './config.json'


export const dataTable = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.get(`${config.xaankooApi}/api/v1/record/datatable`,datas, headerRegisterUser);
}

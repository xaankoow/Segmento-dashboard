import http from './httpService'
import config from './config.json'


export const dataTable = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/record/datatable?type=suggest_google_character`,datas, headerRegisterUser);
}

export const dataTableContentProduction = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "Accept":"application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/word-batch/datatable`,datas, headerRegisterUser);
}

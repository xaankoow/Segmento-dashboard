import http from './httpService'
import config from './config.json'

export const website = website => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/workspace`,website,headerRegisterUser);
}

export const getAllWorkspace = () => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.get(`${config.xaankooApi}/api/v1/workspace`,headerRegisterUser);
}

export const keywords = website => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/workspace`,website,headerRegisterUser);
}

export const creatWorkSpace = workSpace => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/workspace/workspace-wizard`,workSpace,headerRegisterUser);
}
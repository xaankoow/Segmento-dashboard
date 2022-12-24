import http from './httpService'
import config from './config.json'


export const setNewTicket = datas => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.post(`${config.xaankooApi}/api/v1/ticket`,datas, headerRegisterUser);
}

export const getSupportChatData = ({ticketUuid,axiosController}) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain",
        signal: axiosController!=undefined&&axiosController.signal
    }
    return http.get(`${config.xaankooApi}/api/v1/ticket/${ticketUuid}`, headerRegisterUser);
}

export const InitTicketsDataService = ({axiosController}) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain",
        signal: axiosController!=undefined&&axiosController.signal
    }
    return http.get(`${config.xaankooApi}/api/v1/ticket?type=&value=`, headerRegisterUser);
}

export const sendNewMessageTicketServise = (messageData) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.post(`${config.xaankooApi}/api/v1/ticket/add-message`,messageData, headerRegisterUser);
}

export const messageRateServise = (messageRate) => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.post(`${config.xaankooApi}/api/v1/ticket/rate-message`,messageRate, headerRegisterUser);
}
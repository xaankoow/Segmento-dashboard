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

export const getSupportChatData = chatUuid => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
    }
    return http.get(`${config.xaankooApi}/api/v1/ticket/${chatUuid}`, headerRegisterUser);
}

export const ticketTableData = () => {
    //7
    const headerRegisterUser = {
        'Content-Type': 'multipart/form-data',
        "workspace":"text/plain"
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
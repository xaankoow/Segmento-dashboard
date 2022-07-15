export const getAllFinancialReportsData = () => {
    // const headerRegisterUser = {
    //     "Accept": "application/json"
    // }
    return http.post(`${config.xaankooApi}/api/v1/payment `);
}
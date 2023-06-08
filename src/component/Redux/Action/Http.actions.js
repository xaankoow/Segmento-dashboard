export const HTTP_REQUEST_ACTION = "HTTP_REQUEST_ACTION[global]";
export const HTTP_RESPONSE_ACTION = "HTTP_RESPONSE_ACTION[global]";



export const httpRequestAction = (actionName) => ({ type: HTTP_REQUEST_ACTION, payload: { actionName } })

export const httpResponseAction = (actionName, status, response) => {
  const payload = { status, actionName }
  if (status === 'error') {
    payload['error'] = response.isAxiosError&& response.response ? JSON.parse(JSON.stringify(response.response)) : response;
  } else {
    payload['response'] = response;
  }
  return {
    type: HTTP_RESPONSE_ACTION,
    payload
  }
}

import { httpRequestAction, httpResponseAction } from './Http.actions'
import http from '../../service/httpService'
import { API_V2 } from '../../../utils'

export const BusinessActionName = 'businessPages'
export const getBusinessPageAction = () => {
  return  (dispatch, getState) => {
    const { workSpaceState: { webAdressUuid } } = getState()
    console.log(webAdressUuid);
    dispatch(httpRequestAction(BusinessActionName))
    http.get(`${API_V2}/money-pages`, { headers: { 'workspace': webAdressUuid } }).then((response) => {
      dispatch(httpResponseAction(BusinessActionName, 'success', response))
    }).catch((e) => {
      dispatch(httpResponseAction(BusinessActionName, 'error', e))
    })
  }
}

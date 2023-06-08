import { BusinessActionName } from '../Action/Business.action'
import { HTTP_REQUEST_ACTION, HTTP_RESPONSE_ACTION } from '../Action/Http.actions'

const initialState = { [BusinessActionName]: { status: 'idle' } }

const actionsNames = [BusinessActionName]
export const businessReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_REQUEST_ACTION: {
      const { actionName } = payload
      if (actionsNames.includes(actionName))
        return {
          ...state,
          [actionName]: { status: 'loading' }
        }
    }
    case HTTP_RESPONSE_ACTION: {
      const { actionName, ...data } = payload
      if (actionsNames.includes(actionName))
        return {
          ...state,
          [actionName]: data
        }
    }

    default:
      return state
  }

}

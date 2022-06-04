import { combineReducers } from "redux";
import {userReducer} from './user'
// import plan from './plan'


export const reducers=combineReducers({
    userState:userReducer
    // course:courseReducer,
    // user:userReducer
})
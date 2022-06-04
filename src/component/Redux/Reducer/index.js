import { combineReducers } from "redux";
import {userReducer} from './user'
import { planReducer } from "./plan";
// import plan from './plan'


export const reducers=combineReducers({
    userState:userReducer,
    planState:planReducer
    // user:userReducer
})
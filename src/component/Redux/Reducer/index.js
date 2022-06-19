import { combineReducers } from "redux";
import {userReducer} from './user'
import { planReducer } from "./plan";
import { workSpaceReducer } from "./workSpace";
// import plan from './plan'


export const reducers=combineReducers({
    userState:userReducer,
    planState:planReducer,
    workSpaceState:workSpaceReducer
    // user:userReducer
})
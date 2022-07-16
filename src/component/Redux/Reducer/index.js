import { combineReducers } from "redux";
import {userReducer} from './user'
import { planReducer } from "./plan";
import { workSpaceReducer } from "./workSpace";
import { loadingReducer } from "./loading";
import { financialReducer } from "./financialReports";
// import plan from './plan'


export const reducers=combineReducers({
    userState:userReducer,
    planState:planReducer,
    workSpaceState:workSpaceReducer,
    loadingState:loadingReducer,
    financialState:financialReducer
    // user:userReducer
})
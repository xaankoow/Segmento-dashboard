import { combineReducers } from "redux";
import { userReducer } from './user'
import { planReducer } from "./plan";
import { workSpaceReducer } from "./workSpace";
import { loadingReducer } from "./loading";
import { navMenu } from "./navMenu";
import { tiketReducer } from "./tiket";
import { rankTrakingReducer } from "./rankTraking";
import { businessReducer } from "./businessPages";
// import plan from './plan'


export const reducers = combineReducers({
    userState: userReducer,
    planState: planReducer,
    workSpaceState: workSpaceReducer,
    loadingState: loadingReducer,
    navMenuState: navMenu,
    ticketState:tiketReducer,
    rankTrakingState:rankTrakingReducer,
    businessPagesState:businessReducer
    // user:userReducer
})
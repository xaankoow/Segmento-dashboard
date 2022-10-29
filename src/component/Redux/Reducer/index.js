import { combineReducers } from "redux";
import { userReducer } from './user'
import { planReducer } from "./plan";
import { workSpaceReducer } from "./workSpace";
import { loadingReducer } from "./loading";
import { navMenu } from "./navMenu";
import { tiketReducer } from "./tiket";
// import plan from './plan'


export const reducers = combineReducers({
    userState: userReducer,
    planState: planReducer,
    workSpaceState: workSpaceReducer,
    loadingState: loadingReducer,
    navMenuState: navMenu,
    ticketState:tiketReducer
    // user:userReducer
})
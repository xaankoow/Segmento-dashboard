import {applyMiddleware,compose, createStore} from 'redux'

import thunk from 'redux-thunk'
// import {userReducer} from '../Reducer/index'
import {reducers}from '../Reducer/index'

//REDUX DEVTOOLS
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// if (!window.location.port && typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
//     window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
//   }
export const store=createStore(
    reducers,
    compose(applyMiddleware(thunk))
    )

store.subscribe(()=>console.log(store.getState()))
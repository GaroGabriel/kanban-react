import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {test_reducer} from "./test/test_reducer";

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const reducers = combineReducers({
    test_reducer
})

export const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)))



import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {test_reducer} from "./test/test_reducer";
import {columnHeaderSettingsMenuReducer} from "./columnHeaderSetingsMenu/columnHeaderSettingsMenu__reducer";

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const reducers = combineReducers({
    test_reducer,
    columnHeaderSettingsMenuReducer
})

export const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)))



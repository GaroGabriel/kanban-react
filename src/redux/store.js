import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {test_reducer} from "./test/test_reducer";
import {columnSHeaderSettingsMenuReducer} from "./columnSHeaderSetingsMenu/columnSHeaderSetingsMenu__reducer";
import {columnsR} from "./culumns/columns__reducer";
import {columnMenu} from "./columnMenu/columnMenu";

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const reducers = combineReducers({
    test_reducer,
    columnSHeaderSettingsMenuReducer,
    columnsR,
    columnMenu
})

export const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)))



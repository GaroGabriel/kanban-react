import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {test_reducer} from "./test/test_reducer";
import {columnSHeaderSettingsMenuReducer} from "./columnSHeaderSetingsMenu/columnSHeaderSetingsMenu__reducer";
import {columnsR} from "./columns/columns__reducer";
import {columnMenu} from "./columnMenu/columnMenu";
import {columnsColorsMenu} from "./columnsColorsMenu/columnsColorsMenu__reducer";


const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const reducers = combineReducers({
    test_reducer,
    columnSHeaderSettingsMenuReducer,
    columnsR,
    columnMenu,
    columnsColorsMenu
})

export const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)))



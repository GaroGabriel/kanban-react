import uniqid from "uniqid";
import {faBuildingColumns, faChartSimple} from "@fortawesome/free-solid-svg-icons";
import {constants} from "./columnSHeaderSetingsMenu__action";

const columnSHeaderSettingsMenu = {
    header: 'Settings',
    items: [
        {
            id: uniqid(),
            icon: faChartSimple,
            item: 'Some Command'
        },
        {
            id: uniqid(),
            icon: faChartSimple,
            item: 'Do Something'
        },
        {
            id: uniqid(),
            icon: faBuildingColumns,
            item: 'bla bla'
        },
    ]
}

export const columnSHeaderSettingsMenuReducer = (state = columnSHeaderSettingsMenu, action) => {
    switch (action.type) {
        case constants:
            return state
        default:
            return state
    }
}

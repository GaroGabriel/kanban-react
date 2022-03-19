import uniqid from "uniqid";
import {faBuildingColumns, faChartSimple} from "@fortawesome/free-solid-svg-icons";
import {constants} from "./columnHeaderSettingsMenu__action";

const columnHeaderSettingsMenu = {
    header: 'Settings',
    items: [
        {
            id: uniqid(),
            icon: faChartSimple,
            item: 'Add Column'
        },
        {
            id: uniqid(),
            icon: faChartSimple,
            item: 'Add Column'
        },
        {
            id: uniqid(),
            icon: faBuildingColumns,
            item: 'blblb'
        },
    ]
}

export const columnHeaderSettingsMenuReducer = (state = columnHeaderSettingsMenu, action) => {
    switch (action.type) {
        case constants:
            return state
        default:
            return state
    }
}

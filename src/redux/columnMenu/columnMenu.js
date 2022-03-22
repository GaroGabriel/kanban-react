import uniqid from "uniqid";
import {faBuildingColumns, faChartSimple} from "@fortawesome/free-solid-svg-icons";

const menu = {
    header: 'Settings',
    items: [
        {
            id: uniqid(),
            icon: faChartSimple,
            item: 'Rename Column'
        },
        {
            id: uniqid(),
            icon: faChartSimple,
            item: 'Change Color'
        },
        {
            id: uniqid(),
            icon: faBuildingColumns,
            item: 'bla bla'
        },
    ]
}


export const columnMenu = (state=menu,action)=>{
    switch (action.type){
        default:
            return state
    }
}

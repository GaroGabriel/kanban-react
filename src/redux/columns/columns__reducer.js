import uniqid from "uniqid";
import {constantsColumn} from "./columns__action";


let columns = {
    columns: []
}


export const columnsR = (state = columns, action) => {
    switch (action.type) {
        case constantsColumn.ADD__COLUMN: {
            let newColumn = [
                ...state.columns,
                {
                    id: uniqid('col'),
                    title: action.payload.name,
                    color: action.payload.color,
                    tasks: []
                }
            ]

            return  {
                ...state,
                columns: newColumn
            }
        }
        case constantsColumn.ADD__TASK:
            for(let column of state.columns){
                if(column.id ===action.payload.columnId){
                    column.tasks= [...column.tasks,{id:  uniqid('tas'), title: action.payload.title, info:action.payload.info}]
                }
            }

            return {
                ...state,

            }
        default:
            return state
    }
}


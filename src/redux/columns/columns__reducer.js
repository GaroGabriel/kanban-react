import uniqid from "uniqid";
import {constantsColumn} from "./columns__action";


let columns = {
    columns: []
}


export const columnsR = (state = columns, action) => {
    switch (action.type) {
        case constantsColumn.ADD__COLUMN:
            return columns = {
                columns: [
                    ...columns.columns,
                    {
                        id: uniqid('col'),
                        title: action.payload.name,
                        color:action.payload.color,
                        tasks: [{
                            id: uniqid('tas'),
                            title: 'task'
                        }]
                    }
                ]
            }
        default:
            return state
    }
}


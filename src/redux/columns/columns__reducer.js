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
                    tasks: [{
                        id: uniqid('tas'),
                        title: 'task',
                        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, impedit!',
                    }]
                }
            ]

            return  {
                ...state,
                columns: newColumn
            }
        }
        default:
            return state
    }
}


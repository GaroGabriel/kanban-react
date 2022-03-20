import uniqid from "uniqid";
import {constants} from "./columns__action";

const columns = {
    columns: [
        {
            id: uniqid('col'),
            title: 'column 01',
            color:'',
            tasks: [{
                id: uniqid('tas'),
                title: 'task'
            }]
        },
        {
            id: uniqid('col'),
            title: 'column 02',
            color:'',
            tasks: [{
                id: uniqid('tas'),
                title: 'task'
            }]
        }]
}


export const columnsR = (state = columns, action) => {
    switch (action.type) {
        default:
            return state
    }
}

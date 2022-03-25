export const constantsColumn = {
    ADD__COLUMN: 'ADD__COLUMN',
    ADD__TASK: 'ADD__TASK'
}


export const addColumn = (name, color) => {
    return ({
        type: constantsColumn.ADD__COLUMN,
        payload: {
            name: name,
            color: color
        }
    })
}
export const addTask = (title, info, columnId) => {
    return ({
        type: constantsColumn.ADD__TASK,
        payload: {
            title: title,
            info: info,
            columnId: columnId
        }
    })
}

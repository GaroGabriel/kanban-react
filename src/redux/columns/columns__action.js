export const constantsColumn = {
    ADD__COLUMN: 'ADD__COLUMN'
}


export const addColumn = (name,color)=>{
    return({
        type:constantsColumn.ADD__COLUMN,
        payload:{
            name:name,
            color:color
        }
    })
}

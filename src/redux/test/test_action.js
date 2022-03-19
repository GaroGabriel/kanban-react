export const constants = {
    TESTING:'TESTING',
}


export const makeTest =(string)=>{
    return({
        type:constants.TESTING,
        payload:string
    })
}

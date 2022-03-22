export const constantsColor = {
    CHECK__COLOR:'CHECK__COLOR',
    CLEAR__ALL__CHECKED__COLORS:'CLEAR__ALL__CHECKED__COLORS'
}


export const checkColor =(id)=>{
    return({
        type:constantsColor.CHECK__COLOR,
        payload:{
            id:id
        }
    })
}
export const clearAllCheckedColors =()=>{
    return({
        type:constantsColor.CLEAR__ALL__CHECKED__COLORS,
    })
}

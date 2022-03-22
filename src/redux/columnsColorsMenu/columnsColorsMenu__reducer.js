import uniqid from "uniqid";
import {constantsColor} from "./columnsColorsMenu__action";


let initialColors = {
    colors: [
        {id: uniqid('color'), color: '#ff4242', checked: false},
        {id: uniqid('color'), color: '#ff9b42', checked: false},
        {id: uniqid('color'), color: '#c3ff42', checked: false},
        {id: uniqid('color'), color: '#42ff46', checked: false},
        {id: uniqid('color'), color: '#42ffb1', checked: false},
        {id: uniqid('color'), color: '#42f4ff', checked: false},
        {id: uniqid('color'), color: '#4297ff', checked: false},
        {id: uniqid('color'), color: '#5842ff', checked: false},
        {id: uniqid('color'), color: '#e742ff', checked: false},
        {id: uniqid('color'), color: '#ff42ba', checked: false},
    ]
}


export const columnsColorsMenu = (colors = initialColors, action) => {
    switch (action.type) {
        case constantsColor.CHECK__COLOR:
            return {
                ...initialColors,
                colors: initialColors.colors.map(color => {
                    color.id === action.payload.id ?
                        color.checked = true :
                        color.checked = false

                    return color
                })
            }
        case constantsColor.CLEAR__ALL__CHECKED__COLORS:
            return {
                ...initialColors,
                colors: initialColors.colors.map(color=>{
                    color.checked = false
                    return color
                })
            }
        default:
            return colors
    }
}

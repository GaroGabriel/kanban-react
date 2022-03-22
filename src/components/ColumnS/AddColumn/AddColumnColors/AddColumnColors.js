import React from 'react';
import './AddColumnColors.scss'
import {useSelector} from "react-redux";

const AddColumnColors = ({columnColorHandler}) => {
   const colors = useSelector(state=>state.columnsColorsMenu.colors)


    return (
        <div className='addColumnColors'>
            {colors.map(color => {
                return (
                    <div key={color.id}
                         onClick={()=>columnColorHandler(color.id)}
                        className="addColumnColors__color"
                        style={{background: color.color}}>{color.checked?'v':null}</div>
                )
            })}
        </div>
    );
};

export default AddColumnColors;

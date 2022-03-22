import React from 'react';
import './AddcolumnInput.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

const AddColumnInput = ({columnNameHandler,columnName,submitAddColorForm}) => {
    return (
        <form
            className='addColumnInput'
        onSubmit={(e)=>submitAddColorForm(e)}
        >
            <input
                type="text"
                className='addColumnInput__input'
                onChange={(e) => columnNameHandler(e)}
                value={columnName}
                autoFocus
            />
            <FontAwesomeIcon
                onClick={()=>submitAddColorForm()}
                className='addColumnInput__icon'
                icon={faCheck}/>
            <FontAwesomeIcon
                className='addColumnInput__icon'
                icon={faXmark}/>

        </form>
    );
};

export default AddColumnInput;

import React from 'react';
import './AddcolumnInput.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

const AddcolumnInput = () => {
    return (
        <form className='addColumnInput' >
            <input type="text" className='addColumnInput__input'/>
            <FontAwesomeIcon
                className='addColumnInput__icon'
                icon={faCheck}/>
            <FontAwesomeIcon
                className='addColumnInput__icon'
                icon={faXmark}/>
        </form>
    );
};

export default AddcolumnInput;

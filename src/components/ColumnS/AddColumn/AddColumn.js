import React from 'react';
import './AddColumn.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import AddcolumnInput from "./AddcolumnInput/AddcolumnInput";

const AddColumn = () => {
    return (
        <div className='addColumn'>
            <div className='addColumn__button'>
                <span className='addColumn__header'>Add Column</span>
                <FontAwesomeIcon
                    className='addColumn__icon'
                    icon={faPlus}/>
            </div>
            <AddcolumnInput/>
        </div>
    );
};

export default AddColumn;

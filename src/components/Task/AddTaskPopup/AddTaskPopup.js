import React from 'react';
import './AddTaskPopup.scss'
import {ButtonSubmit} from "../../index";
const AddTaskPopup = () => {

    return (
        <div className='addTaskPopup'>
            <form className="addTaskPopup__form">
                <h3 className="addTaskPopup__header">Add Task</h3>
                <label className='addTaskPopup__label'>

                    <span className='addTaskPopup__name'>Task Name</span>
                    <input type="text"/>
                </label>
                <label className='addTaskPopup__label'>
                    <span className='addTaskPopup__description'>Task Description</span>
                    <textarea
                        name="description"
                        rows="5"
                        cols="33"/>
                </label>
                <ButtonSubmit buttonTex='Ok'/>
            </form>
        </div>
    );
};

export default AddTaskPopup;

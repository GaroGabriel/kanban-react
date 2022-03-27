import React, {useEffect, useRef, useState} from 'react';
import './AddTaskPopup.scss'
import {ButtonSubmit} from "../../index";

const AddTaskPopup = ({closeAddTaskPopupHandler, addTaskHandler}) => {

    const [newTaskName, setNewTaskName] = useState('')
    const [newTaskDescription, setNewTaskNameDescription] = useState('')
const onSubmitHandler=(e)=>{
        e && e.preventDefault()
    addTaskHandler(newTaskName, newTaskDescription)
}

    return (
        <div className='addTaskPopup'>
            <form className="addTaskPopup__form" onSubmit={(e)=>{
                onSubmitHandler(e)
            }}>
                <h3 className="addTaskPopup__header">Add Task</h3>
                <label className='addTaskPopup__label'>

                    <span className='addTaskPopup__name'>Task Name</span>
                    <input type="text"
                           className='addTaskPopup__input'
                           value={newTaskName}
                           onChange={(e) => {
                               setNewTaskName(e.target.value)
                           }}/>
                </label>
                <label className='addTaskPopup__label'>
                    <span className='addTaskPopup__description'>Task Description</span>
                    <textarea
                        name="description"
                        rows="5"
                        cols="33"
                        className='addTaskPopup__textarea'
                        value={newTaskDescription}
                        onChange={(e) => {
                            setNewTaskNameDescription(e.target.value)
                        }}
                    />
                </label>
                <div className="addTaskPopup__buttonsWrapper">
                    <ButtonSubmit
                        buttonTex='Ok'
                        classNameProp={'addTaskPopup__ok'}
                        onClickProp={() => {
                            onSubmitHandler()
                        }}
                    />
                    <ButtonSubmit
                        classNameProp={"addTaskPopup__cancel"}
                        buttonTex='Cancel'
                        onClickProp={closeAddTaskPopupHandler}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddTaskPopup;

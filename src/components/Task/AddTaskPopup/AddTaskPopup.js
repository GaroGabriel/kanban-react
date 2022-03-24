import React, {useEffect, useRef} from 'react';
import './AddTaskPopup.scss'
import {ButtonSubmit} from "../../index";

const AddTaskPopup = ({closeAddTaskPopupHandler,showAddTaskPopup}) => {
    let backgroundRef = useRef(null)
    const onBackgroundClickRef = (e) => {
        if (e.path ? !e.path.includes(backgroundRef.current) : !e.composedPath().includes(backgroundRef.current)) {
            closeAddTaskPopupHandler()
        }
    }
    useEffect(() => {
        document.querySelector('html').addEventListener('click', onBackgroundClickRef)
        return () => document.querySelector('html').removeEventListener('click', onBackgroundClickRef)
    }, [showAddTaskPopup])


    return (
        <div className='addTaskPopup' ref={backgroundRef} >
            <form className="addTaskPopup__form">
                <h3 className="addTaskPopup__header">Add Task</h3>
                <label className='addTaskPopup__label'>

                    <span className='addTaskPopup__name'>Task Name</span>
                    <input type="text" className='addTaskPopup__input'/>
                </label>
                <label className='addTaskPopup__label'>
                    <span className='addTaskPopup__description'>Task Description</span>
                    <textarea
                        name="description"
                        rows="5"
                        cols="33"
                        className='addTaskPopup__textarea'
                    />
                </label>
                <div className="addTaskPopup__buttonsWrapper">
                    <ButtonSubmit
                        buttonTex='Ok'
                        classNameProp={'addTaskPopup__ok'}
                        onClickProp={null}
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

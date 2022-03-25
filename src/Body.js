import React, {useState} from 'react';
import {AddTaskPopup, ColumnS} from "./components";
import {useDispatch} from "react-redux";
import {addTask} from "./redux/columns/columns__action";

const Body = () => {
    const [showAddTaskPopup,setShowAddTaskPopup] = useState(false)
    const [currentColumnID,setCurrentColumnID] = useState('')
    const dispatch = useDispatch()
    const closeAddTaskPopupHandler = ()=>{
        setShowAddTaskPopup(false)
    }
    const openAddTaskPopupHandler = (id)=>{
        setShowAddTaskPopup(true)
        setCurrentColumnID(id)
    }
    const addTaskHandler = (title, info) => {
        dispatch(addTask(title, info,currentColumnID))
        closeAddTaskPopupHandler()

    }
    return (
        <div>
            <ColumnS
                openAddTaskPopupHandler={openAddTaskPopupHandler}
            />
            {showAddTaskPopup &&
            <AddTaskPopup
                showAddTaskPopup={showAddTaskPopup}
                addTaskHandler={addTaskHandler}
                closeAddTaskPopupHandler={closeAddTaskPopupHandler}
            />}

        </div>
    );
};

export default Body;

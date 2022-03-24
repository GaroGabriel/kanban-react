import React, {useState} from 'react';
import {AddTaskPopup, ColumnS} from "./components";

const Body = () => {
    const [showAddTaskPopup,setShowAddTaskPopup] = useState(false)
    const closeAddTaskPopupHandler = ()=>{
        setShowAddTaskPopup(false)
    }
    const openAddTaskPopupHandler = ()=>{
        setShowAddTaskPopup(true)
    }
    return (
        <div>
            <ColumnS
                openAddTaskPopupHandler={openAddTaskPopupHandler}
            />
            {showAddTaskPopup &&
            <AddTaskPopup
                showAddTaskPopup={showAddTaskPopup}
                closeAddTaskPopupHandler={closeAddTaskPopupHandler}
            />}

        </div>
    );
};

export default Body;

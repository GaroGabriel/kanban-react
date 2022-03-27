import React from 'react';
import './Column.scss'
import {ColumnHeader, Task} from "../../index";


const Column = ({column,openAddTaskPopupHandler}) => {

    return (
        <div className='column'>
            <ColumnHeader
                column={column}
                openAddTaskPopupHandler={openAddTaskPopupHandler}
            />
            {column.tasks.map(task=>{
                return(
                    <Task task={task} key={task.id} columnColor={column.color}/>
                )
            })}
        </div>
    );
};

export default Column;

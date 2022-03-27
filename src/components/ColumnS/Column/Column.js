import React, {useState} from 'react';
import './Column.scss'
import {ColumnHeader, Task} from "../../index";


const Column = (props) => {

    return (
        <div className='column'>
            <ColumnHeader
                column={props.column}
                openAddTaskPopupHandler={props.openAddTaskPopupHandler}
            />
            {props.column.tasks.map(task=>{
                return(
                    <Task
                        task={task}
                        key={task.id}
                        column={props.column}
                        onDragStartHandler={props.onDragStartHandler}
                        onDragEndHandler={props.onDragEndHandler}
                        columnColor={props.column.color}/>
                )
            })}
        </div>
    );
};

export default Column;

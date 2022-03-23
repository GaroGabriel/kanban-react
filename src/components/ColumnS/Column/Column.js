import React from 'react';
import './Column.scss'
import {ColumnHeader, Task} from "../../index";


const Column = ({column}) => {

    return (
        <div className='column'>
            <ColumnHeader column={column}/>
            {column.tasks.map(task=>{
                return(
                    <Task task={task} key={task.id}/>
                )
            })}
        </div>
    );
};

export default Column;

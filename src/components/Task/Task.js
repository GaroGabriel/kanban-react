import React from 'react';
import './Task.scss'

const Task = ({task,columnColor,column,onDragStartHandler,onDragEndHandler}) => {
    //todo move task from to
       return (
        <div
            className='task'
            onDragOver={(e)=>console.log('onDragOver')}
            onDragLeave={()=>console.log('onDragLeave')}
            onDragStart={()=>onDragStartHandler()}
            onDragEnd={()=>onDragEndHandler()}
            onDrop={()=>console.log('onDrop')}
            draggable>
            <div className="task__color" style={{background: columnColor}}/>
            <div className="task__infoWrapper">
                <h3 className="task__header">{task.title}</h3>
                <span className="task__info">
                {task.info}
            </span>
            </div>
        </div>
    );
};

export default Task;

import React from 'react';
import './Task.scss'

const Task = ({task}) => {
    return (
        <div className='task'>
            <h3 className="task__header">{task.title}</h3>
            <span className="task__info">
                {task.info}
            </span>
        </div>
    );
};

export default Task;

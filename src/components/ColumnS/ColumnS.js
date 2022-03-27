import React, {useState} from 'react';
import './columnS.scss'
import {AddColumn, Column, ColumnsHeader} from "../index";
import {useSelector} from "react-redux";

const ColumnS = ({openAddTaskPopupHandler}) => {
    const columns = useSelector((state) => state.columnsR.columns)
    const [disableColumnClass ,setDisableColumnClass] = useState('')

    const onDragStartHandler=()=>{
        setDisableColumnClass('columnS__disable')
    }
    const onDragEndHandler=()=>{
        setDisableColumnClass('')
    }

    return (
        <div className={`columnS ${disableColumnClass}`}>
            <ColumnsHeader/>
            <div className="columnS__wrapper">
                {columns.map(column => {
                    return (
                        <Column
                            key={column.id}
                            column={column} openAddTaskPopupHandler={openAddTaskPopupHandler}
                            onDragStartHandler={onDragStartHandler}
                            onDragEndHandler={onDragEndHandler}
                        />
                    )
                })}
                <AddColumn/>
            </div>
        </div>
    );
};

export default ColumnS;

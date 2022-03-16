import React from 'react';
import './columnS.scss'
import {Column, ColumnsHeader} from "../index";

const ColumnS = () => {
    return (
        <div className='columns'>
            <ColumnsHeader/>
            <Column/>
        </div>
    );
};

export default ColumnS;

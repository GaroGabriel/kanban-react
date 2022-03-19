import React from 'react';
import './columnS.scss'
import {Column, ColumnsHeader} from "../index";

const ColumnS = () => {
    return (
        <div className='columnS'>
            <ColumnsHeader/>
            <div className="columnS__wrapper">
                <Column/>

            </div>
        </div>
    );
};

export default ColumnS;

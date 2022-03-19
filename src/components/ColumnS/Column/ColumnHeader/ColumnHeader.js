import React from 'react';
import './ColumnHeader.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {ButtonDots} from "../../../index";

const ColumnHeader = () => {
    return (
        <div className='columnHeader'>
            <div className="columnHeader__wrapper">
                <h3 className="columnHeader__title">title</h3>
                <span className="columnHeader__taskCount">8</span>
            </div>
            <div className="columnHeader__wrapper">
                <div className="columnHeader__menu">
                    <ButtonDots/>
                </div>
                <div className="columnHeader__add">
                    {/*<FontAwesomeIcon icon="faPlus" />*/}
                    <FontAwesomeIcon
                        className='popup__icon'
                        icon={faPlus}/>
                </div>
            </div>
        </div>
    );
};

export default ColumnHeader;

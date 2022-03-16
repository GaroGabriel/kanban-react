import React, {useState} from 'react';
import './ColumnsHeaderSettings.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {ColumnsHeaderSettingsPopup} from "../index";

const ColumnsHeaderSettings = () => {
    const [showSettingsPopup, setShowSettingsPopup] = useState(false)
    const showHideMenu = () => {
        setShowSettingsPopup(prevState => !prevState)
    }

    return (
        <div className='columnsHeaderSettings'>
            <FontAwesomeIcon
                icon={faEllipsis}
                onClick={() => {
                    showHideMenu()
                }}
                className={`columnsHeaderSettings__icon ${showSettingsPopup && 'columnsHeaderSettings__icon-active'}`}
            />
            <ColumnsHeaderSettingsPopup/>
        </div>
    );
};

export default ColumnsHeaderSettings;

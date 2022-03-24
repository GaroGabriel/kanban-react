import React, {useEffect, useRef, useState} from 'react';
import './ColumnHeader.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {ButtonDots, Popup} from "../../../index";
import {useSelector} from "react-redux";


const ColumnHeader = ({column,openAddTaskPopupHandler}) => {
    const [showSettingsPopup, setShowSettingsPopup] = useState(false)
    const menu = useSelector(state => state.columnMenu)
    const refForPopup = useRef(null)

//FUNCTIONS
    const showHideMenu = () => {
        setShowSettingsPopup(prevState => !prevState)
    }
    const closePopup = (e) => {
        if (showSettingsPopup) {
            if (e.path ? !e.path.includes(refForPopup.current) : !e.composedPath().includes(refForPopup.current)) {
                setShowSettingsPopup(false)
            }
        }
    }
    useEffect(() => {
        document.querySelector('html').addEventListener('click', closePopup)
        return () => document.querySelector('html').removeEventListener('click', closePopup)
    }, [showSettingsPopup])
    return (
        <div className='columnHeader' style={{background:column.color}}>
            <div className="columnHeader__wrapper">
                <h3 className="columnHeader__title">{column.title}</h3>
                <span className="columnHeader__taskCount">{column.tasks.length}</span>
            </div>
            <div className="columnHeader__wrapper">
                <div className="columnHeader__menu">
                    <ButtonDots
                        onClick={() => {
                            showHideMenu()
                        }}/>
                    {showSettingsPopup && <Popup
                        className='columnsHeaderSettings-popup'
                        header={menu.header}
                        menuItems={menu}
                        refer={refForPopup}
                    />}
                </div>
                <div className="columnHeader__add">
                    <FontAwesomeIcon
                        className='popup__icon'
                        icon={faPlus}
                        onClick={()=>openAddTaskPopupHandler()}
                    />
                </div>
            </div>
        </div>
    );
};

export default ColumnHeader;

import React, {useRef, useState} from 'react';
import './ColumnHeader.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {ButtonDots, Popup} from "../../../index";
import {useSelector} from "react-redux";


const ColumnHeader = ({column}) => {
const [showSettingsPopup,setShowSettingsPopup] = useState(false)
   const menu =  useSelector(state=>state.columnMenu)
    const refForPopup = useRef(null)
    console.log(menu.items)
//FUNCTIONS
    const showHideMenu = () => {
        setShowSettingsPopup(prevState => !prevState)
    }
    return (
        <div className='columnHeader'>
            <div className="columnHeader__wrapper">
                <h3 className="columnHeader__title">{column.title}</h3>
                <span className="columnHeader__taskCount">8</span>
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
                        icon={faPlus}/>
                </div>
            </div>
        </div>
    );
};

export default ColumnHeader;

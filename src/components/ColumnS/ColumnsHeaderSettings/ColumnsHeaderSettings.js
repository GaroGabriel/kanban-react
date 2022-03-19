import React, {useEffect, useRef, useState} from 'react';
import './ColumnsHeaderSettings.scss'
import {ButtonDots, Popup} from "../../index";
import {useDispatch, useSelector} from "react-redux";
import {getSettingsMenu} from "../../../redux/columnHeaderSetingsMenu/columnHeaderSettingsMenu__action";


const ColumnsHeaderSettings = () => {
//REDUX
    const dispatch = useDispatch()
    const menu = useSelector(state => state.columnHeaderSettingsMenuReducer)
    useEffect(() => {
        dispatch(getSettingsMenu())
    }, [dispatch])
//HOOKS
    const [showSettingsPopup, setShowSettingsPopup] = useState(false)
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


//RETURN
    return (
        <div className='columnsHeaderSettings'>
            <ButtonDots
                propClass={'columnsHeaderSettings__buttonDots'}
                active={showSettingsPopup}
                onClick={() => {
                    showHideMenu()
                }}/>
            {showSettingsPopup && <Popup
                className='columnsHeaderSettings-popup'
                header={'Settings'}
                menuItems={menu}
                refer={refForPopup}
            />}

        </div>
    );
};

export default ColumnsHeaderSettings;

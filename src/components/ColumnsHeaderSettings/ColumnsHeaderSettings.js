import React, {useState} from 'react';
import './ColumnsHeaderSettings.scss'
import {ButtonDots, Popup} from "../index";
import {faChartSimple, faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import uniqid from 'uniqid'


const ColumnsHeaderSettings = () => {
    const menuItems = {
        header: 'Settings',
        items: [
            {
                id: uniqid(),
                icon: faChartSimple,
                item: 'Add Column'
            },
            {
                id: uniqid(),
                icon: faChartSimple,
                item: 'Add Column'
            },
            {
                id: uniqid(),
                icon: faBuildingColumns,
                item: 'blblb'
            },
        ]
    }


    const [showSettingsPopup, setShowSettingsPopup] = useState(false)
    const refForPopup = React.useRef(null)
    const showHideMenu = () => {
        setShowSettingsPopup(prevState => !prevState)
    }
    const closePopup = (e) => {
        console.log(showSettingsPopup)
        if(showSettingsPopup){
            console.log(showSettingsPopup)
            if (e.path ?  !e.path.includes(refForPopup.current):!e.composedPath().includes(refForPopup.current)  )  {
                setShowSettingsPopup(false)
            }
        }

    }
    React.useEffect(() => {
        document.querySelector('html').addEventListener('click', closePopup)
        return () => document.querySelector('html').removeEventListener('click', closePopup)
    }, [])

    return (
        <div className='columnsHeaderSettings'>
            <ButtonDots
                active={showSettingsPopup}
                onClick={() => {
                    showHideMenu()
                }}/>
            {showSettingsPopup && <Popup
                className='columnsHeaderSettings-popup'
                header={'Settings'}
                menuItems={menuItems}
                refer={refForPopup}
            />}

        </div>
    );
};

export default ColumnsHeaderSettings;

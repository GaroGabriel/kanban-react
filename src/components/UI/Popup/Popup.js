import React from 'react';
import './Popup.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Popup = ({menuItems,refer}) => {

    return (
        <div className='popup' ref={refer}>
            <h4 className='popup__header'>{menuItems.header}</h4>
            <ul className='popup__list'>
                {menuItems.items.map(item => {
                    return (
                        <li className='popup__link' key={item.id}>
                            <FontAwesomeIcon
                                className='popup__icon'
                                icon={item.icon}/>
                            <span
                                className='popup__item'>{item.item}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Popup;

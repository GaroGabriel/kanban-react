import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import './ButtonDots.scss'
const ButtonDots = ({active,propClass,...props}) => {
    return (
            <FontAwesomeIcon
                icon={faEllipsis}
                {...props}
                className={`buttonDots ${propClass} ${active && 'buttonDots-active'}`}
            />

    );
};

export default ButtonDots;

import React from 'react';
import './ButtonSubmit.scss'
const ButtonSubmit = ({buttonTex,classNameProp,onClickProp}) => {
    return (
        <div
            className={`Button ${classNameProp}`}
        onClick={()=>onClickProp()}
        >
            {buttonTex}
        </div>
    );
};

export default ButtonSubmit;

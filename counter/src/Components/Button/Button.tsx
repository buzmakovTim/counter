import React from 'react';
import s from './Button.module.css';

type ButtonPropsType = {
    title: string;
    isDisable: boolean;
    callBack?: () => void;
}

export function Button(props: ButtonPropsType) {


    const buttonClassName =  `${ props.isDisable ? s.disabled : s.button }`

    return (
        <div onClick={!props.isDisable ? props.callBack : () => {}} className={buttonClassName}>
                <h3>{props.title}</h3>
        </div>
    )
}
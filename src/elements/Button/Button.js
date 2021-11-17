import React from 'react';
import './Button.css';

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--succes--solid",
    "btn--special--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--special--outline",
];

const SIZES = ["btn--medium", "btn--large"];


const Button = ({children, type, onClick, buttonStyle, buttonSize, disabled}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            type={type ? type : "button"}
            disabled = {disabled ? !disabled : disabled}
        >
            {children}
        </button>
    )

};

export default Button;

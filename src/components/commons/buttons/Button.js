import React from 'react';
import PropTypes from 'prop-types';

import style from './button.module.css';

const Button = ({ active = false, onClick, type = "button", className, children }) => {
    return (
        <button onClick={onClick} type={type} className={`${style.btn} ${className} ${active ? style.active : ''}`}>{children}</button>
    );
};

Button.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button;
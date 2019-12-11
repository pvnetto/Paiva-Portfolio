import React from 'react';

import style from './button.module.css';

const Button = ({ children, className, active, onClick }) => {
    return (
        <button onClick={onClick} className={`${style.btn} ${className} ${active ? style.active : ''}`}>{children}</button>
    );
};

export default Button;
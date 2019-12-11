import React from 'react';
import style from './container.module.css'

const Container = ({ children, className }) => {
    return (
        <div className={`${style.container} ${className}`}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
};

export default Container;
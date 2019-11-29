import React from 'react';
import style from './container.module.css'

const Container = ({ children }) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
};

export default Container;
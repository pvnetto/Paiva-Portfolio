import React from 'react';
import style from './content.module.css';

const Header = ({ children }) => {
    return <h1 className={style.header}>{children}</h1>
}

const Emphasized = ({ children }) => {
    return <span className={style.emphasized}>{children}</span>
}

const Content = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

Content.Header = Header;
Content.Emphasized = Emphasized;

export default Content;
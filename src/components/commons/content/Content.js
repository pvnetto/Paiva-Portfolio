import React from 'react';
import style from './content.module.css';

const Header = ({ text }) => {
    return <h1 data-text={text} className={`${style.header} ${style.glitch}`}>{text}</h1>
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
import React from 'react';

import PropTypes from 'prop-types';

import style from './content.module.css';
import GlitchHeader from '../headers/GlitchHeader';

const Header = ({ text }) => {
    return <GlitchHeader text={text} className={style.header}>{text}</GlitchHeader>
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
}

const Emphasized = ({ children }) => {
    return <span className={style.emphasized}>{children}</span>
}

const Content = ({ children, className }) => {
    return (
        <div className={`${style.container} ${className}`}>
            {children}
        </div>
    );
};

Content.Header = Header;
Content.Emphasized = Emphasized;

export default Content;
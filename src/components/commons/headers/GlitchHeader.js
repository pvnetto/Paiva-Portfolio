import React from 'react';

import style from './glitch.module.css';

const GlitchHeader = ({ text, children, className }) => {
    return (
        <h1 data-text={text} className={`${style.glitch} ${className}`}>{children}</h1>
    );
};

export default GlitchHeader;
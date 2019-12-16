import React from 'react';
import PropTypes from 'prop-types';

import style from './glitch.module.css';

const GlitchHeader = ({ text, children, className }) => {
    return (
        <h1 data-text={text} className={`${style.glitch} ${className}`}>{children}</h1>
    );
};

GlitchHeader.propTypes = {
    text: PropTypes.string.isRequired,
}

export default GlitchHeader;
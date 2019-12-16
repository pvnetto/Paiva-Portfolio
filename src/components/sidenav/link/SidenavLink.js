import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './link.module.css'

const SidenavLink = ({ title, icon, to }) => {

    return (
        <NavLink activeClassName={style.active} className={style.sidenavBtn} exact to={to}>
            <FontAwesomeIcon icon={icon} />
            <p>{title}</p>
        </NavLink>
    );
};

SidenavLink.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
}

export default SidenavLink;
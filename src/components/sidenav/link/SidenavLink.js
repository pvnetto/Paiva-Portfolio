import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as style from './link.module.css'

const SidenavLink = ({ title, icon, to }) => {

    return (
        <NavLink className={({ isActive }) => {
            const linkClasses = [style.sidenavBtn];
            if (isActive) linkClasses.push(style.active);
            
            return linkClasses.join(" "); // returns "registerButton" or "registerButton active"
          }} end to={to}>
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
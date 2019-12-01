import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

export default SidenavLink;
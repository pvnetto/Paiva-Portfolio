import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import style from './sidenav.module.css'

const SidenavLink = ({ title, icon, to }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavLink activeClassName={style.active} className={style.sidenavBtn} exact to={to}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon icon={icon} />
            <p className={isHovered ? style.active : ''}>{title}</p>
        </NavLink>
    );
};

export default SidenavLink;
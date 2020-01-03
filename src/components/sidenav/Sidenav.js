import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFistRaised, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import style from './sidenav.module.css'

import SidenavLink from './link';

const Sidenav = () => {

    return (
        <div className={style.sidenav}>
            <Link className={style.logo} to="/">
                <p style={{ margin: '0' }}>P</p>
                <p style={{ fontSize: '0.7rem', margin: '0' }}>Paiva</p>
            </Link>
            <div className={style.sidenavBtnsContainer}>
                <SidenavLink title={"Home"} to={"/"} icon={faHome} />
                <SidenavLink title={"About"} to={"/about"} icon={faUser} />
                <SidenavLink title={"Skills"} to={"/skills"} icon={faFistRaised} />
                <SidenavLink title={"Works"} to={"/projects"} icon={faCode} />
                <SidenavLink title={"Contact"} to={"/contact"} icon={faEnvelope} />
            </div>

            <div className={style.sidenavBtnsContainer}>
                <a className={style.socialMediaBtn} href="https://www.linkedin.com/in/paiva-netto/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className={style.socialMediaBtn} href="https://github.com/pvnetto"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default Sidenav;
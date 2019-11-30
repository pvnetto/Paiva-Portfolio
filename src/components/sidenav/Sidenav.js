import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFistRaised, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import style from './sidenav.module.css'
import SidenavLink from './SidenavLink';


const Sidenav = () => {

    return (
        <div className={style.sidenav}>
            <div>
                <p>P</p>
            </div>
            <div className={style.sidenavBtnsContainer}>
                <SidenavLink title={"Home"} to={"/"} icon={faHome} />
                <SidenavLink title={"About"} to={"/about"} icon={faUser} />
                <SidenavLink title={"Skills"} to={"/skills"} icon={faFistRaised} />
                <SidenavLink title={"Works"} to={"/projects"} icon={faCode} />
                <SidenavLink title={"Contact"} to={"/contact"} icon={faEnvelope} />
            </div>

            <div className={style.sidenavBtnsContainer}>
                <a className={style.socialMediaBtn} href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                <a className={style.socialMediaBtn} href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className={style.socialMediaBtn} href=""><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    );
};

export default Sidenav;
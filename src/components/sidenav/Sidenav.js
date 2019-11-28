import React from 'react';
import style from './sidenav.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFistRaised, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidenav = () => {

    return (
        <div className={style.sidenav}>
            <div>
                <p>P</p>
            </div>
            <div className={style.sidenavBtnsContainer}>
                <a className={style.sidenavBtn} href=""><FontAwesomeIcon icon={faHome} /></a>
                <a className={style.sidenavBtn} href=""><FontAwesomeIcon icon={faUser} /></a>
                <a className={style.sidenavBtn} href=""><FontAwesomeIcon icon={faFistRaised} /></a>
                <a className={style.sidenavBtn} href=""><FontAwesomeIcon icon={faCode} /></a>
                <a className={style.sidenavBtn} href=""><FontAwesomeIcon icon={faEnvelope} /></a>
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
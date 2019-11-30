import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFistRaised, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import style from './sidenav.module.css'


const Sidenav = () => {

    return (
        <div className={style.sidenav}>
            <div>
                <p>P</p>
            </div>
            <div className={style.sidenavBtnsContainer}>
                <Link className={style.sidenavBtn} to=""><FontAwesomeIcon icon={faHome} /></Link>
                <Link className={style.sidenavBtn} to="about"><FontAwesomeIcon icon={faUser} /></Link>
                <Link className={style.sidenavBtn} to="skills"><FontAwesomeIcon icon={faFistRaised} /></Link>
                <Link className={style.sidenavBtn} to="projects"><FontAwesomeIcon icon={faCode} /></Link>
                <Link className={style.sidenavBtn} to="contact"><FontAwesomeIcon icon={faEnvelope} /></Link>
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
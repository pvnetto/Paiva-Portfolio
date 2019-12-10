import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import style from './project-modal.module.css';
import { text } from '../../../../../node_modules/@fortawesome/fontawesome-svg-core';

const reduceToString = (arr) => {
    if (!arr) return "";
    return arr.reduce((currentText, currentTech) => {
        if (currentText != "") currentText += ', ';
        currentText += currentTech;
        return currentText;
    }, "");
}

const ProjectModal = ({ show, handleClose, title, category, techs, roles, description }) => {

    return (
        <>
            {show ?
                <div className={style.infoContainer}>
                    <div className={style.closeBtnContainer}>
                        <div onClick={handleClose} className={style.closeBtn}>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <div className={style.header}>
                            <h2>{title}</h2>
                        </div>

                        <div className={style.infoRow}>
                            <div className={style.infoItem}>
                                <h3>Category</h3>
                                <p>{category}</p>
                            </div>
                            <div className={style.infoItem}>
                                <h3>Techs</h3>
                                <p>{reduceToString(techs)}</p>
                            </div>
                            <div className={style.infoItem}>
                                <h3>Role</h3>
                                <p>{reduceToString(roles)}</p>
                            </div>
                        </div>

                        <div className={style.infoItem + " " + style.description}>
                            <h3>Description</h3>
                            {description.map((text, idx) => <p key={idx}>{text}</p>)}
                        </div>

                        <div>
                            <button className={style.infoBtn}>Live Version</button>
                            <button className={style.infoBtn}> <FontAwesomeIcon icon={faGithub} /> GitHub</button>
                        </div>

                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div> : null}
        </>
    );
};

export default ProjectModal;
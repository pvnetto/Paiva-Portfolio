import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import style from './project-modal.module.css';
import Button from '../../../commons/buttons/Button';

const reduceToString = (arr) => {
    if (!arr) return "";
    return arr.reduce((currentText, currentTech) => {
        if (currentText != "") currentText += ', ';
        currentText += currentTech;
        return currentText;
    }, "");
}

const ProjectModal = ({ show, handleClose, title, category, techs, roles, links, awards, description, images }) => {

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
                            <div className={`${style.infoItem} ${style.infoItemWrap}`}>
                                <h3>Techs</h3>
                                <p>{reduceToString(techs)}</p>
                            </div>
                            <div className={`${style.infoItem} ${style.infoItemWrap}`}>
                                <h3>Role</h3>
                                <p>{reduceToString(roles)}</p>
                            </div>
                        </div>

                        {awards && awards.length > 0 ?
                            <div className={style.infoRow}>
                                <div className={style.infoItem}>
                                    <h3>Awards</h3>
                                    {awards.map(award => <p>{award}</p>)}
                                </div>
                            </div> : null}

                        <div className={style.infoItem + " " + style.description}>
                            <h3>Description</h3>
                            {description.map((text, idx) => <p key={idx}>{text}</p>)}
                        </div>

                        <div className={style.infoBtnContainer}>
                            {links.live ?
                                <a href={links.live}>
                                    <Button className={style.infoBtn}>Live Version</Button>
                                </a> : null}
                            {links.github ?
                                <a href={links.github}>
                                    <Button className={style.infoBtn}> <FontAwesomeIcon icon={faGithub} /> GitHub</Button>
                                </a> : null}
                        </div>

                        <div>
                            {images && images.map((img, idx) => <img className={style.infoImg} key={idx} src={img} alt="" />)}
                        </div>
                    </div>
                </div> : null}
        </>
    );
};

ProjectModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.objectOf(PropTypes.string).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProjectModal;
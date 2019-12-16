import React from 'react';
import PropTypes from 'prop-types';

import itemImg from '../../../../public/images/terrain_wire.png';

import style from './project-item.module.css';

const ProjectItem = ({ projectInfo, openModal, hidden }) => {

    return (
        <div onClick={() => openModal(projectInfo)} className={`${style.item} ${hidden ? style.hidden : ''}`}>
            <img src={itemImg} alt="" />

            <div className={style.tooltip}>
                <p>Click for more info</p>
            </div>
        </div>
    );
};

ProjectItem.propTypes = {
    projectInfo: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired,
}

export default ProjectItem;
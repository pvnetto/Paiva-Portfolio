import React from 'react';
import { Link } from 'react-router-dom';

import itemImg from '../../../../public/images/terrain_wire.png';

import style from './project-item.module.css';

const ProjectItem = ({ id = 0, title }) => {
    return (
        <Link to={`projects/${id}`} className={style.item}>
            <img src={itemImg} alt="" />

            <div className={style.tooltip}>
                <p>Click for more info</p>
            </div>
        </Link>
    );
};

export default ProjectItem;
import React from 'react';

import itemImg from '../../../../public/images/terrain_wire.png';

import style from './project-item.module.css';

const ProjectItem = ({ id = 0, title, onClick }) => {

    return (
        <>
            <div onClick={onClick} className={style.item}>
                <img src={itemImg} alt="" />

                <div className={style.tooltip}>
                    <p>Click for more info</p>
                </div>
            </div>
        </>
    );
};

export default ProjectItem;
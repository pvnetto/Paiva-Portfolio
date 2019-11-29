import React from 'react';
import Container from '../../commons/container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import style from './project-info.module.css';

const ProjectInfo = ({ title, category, techs, role, description }) => {
    return (
        <Container>
            <div className={style.infoContainer}>
                <div className={style.closeBtn}>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div className={style.header}>
                        <h2>Chama! Bailão</h2>
                    </div>

                    <div className={style.infoRow}>
                        <div className={style.infoItem}>
                            <h3>Category</h3>
                            <p>Game</p>
                        </div>
                        <div className={style.infoItem}>
                            <h3>Techs</h3>
                            <p>C#, Unity3D</p>
                        </div>
                        <div className={style.infoItem}>
                            <h3>Role</h3>
                            <p>Programmer</p>
                        </div>
                    </div>

                    <div className={style.infoItem + " " + style.description}>
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod suscipit velit, ut condimentum arcu fermentum in.
                        Quisque egestas facilisis ante et convallis. Pellentesque a nunc in ligula placerat consectetur.</p>
                        <p>In luctus ac ex vel sollicitudin. Aenean in tortor vel nulla efficitur efficitur sit amet ut orci.
                            Sed dignissim diam purus, vel aliquam erat tincidunt at. In a orci nunc. Praesent nec risus sit amet
                        justo venenatis molestie non nec sapien. In commodo maximus nibh, vitae porttitor mauris efficitur sed.</p>
                    </div>

                    <div className={style.btnContainer}>
                        <button>Live Version</button>
                        <button> <FontAwesomeIcon icon={faGithub} /> GitHub</button>
                    </div>

                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectInfo;
import React from 'react';
import Content from '../commons/content';
import Container from '../commons/container';

import style from './projects.module.css';

const Projects = () => {
    return (
        <Container>
            <Content>
                <Content.Header>My Projects</Content.Header>
                <p>Lorem ipsum dolor sit amet, consectetur <Content.Emphasized>adipiscing</Content.Emphasized> elit.
                    Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat
                    orci convallis sed. Maecenas faucibus leo a consectetur egestas.</p>

                <div>
                    <p>Filter by category:</p>
                    <div className={style.btnsContainer}>
                        <button className={style.filterBtn}>All</button>
                        <button className={style.filterBtn}>Web</button>
                        <button className={style.filterBtn}>Games</button>
                    </div>
                </div>

                <div>
                    <p>Filter by tech:</p>
                    <div className={style.btnsContainer}>
                        <button className={style.filterBtn}>All</button>
                        <button className={style.filterBtn}>JavaScript</button>
                        <button className={style.filterBtn}>Python</button>
                        <button className={style.filterBtn}>React</button>
                        <button className={style.filterBtn}>Unity3D</button>
                    </div>
                </div>
            </Content>
        </Container>
    );
};

export default Projects;
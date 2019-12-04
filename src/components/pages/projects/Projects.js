import React, { useState, useEffect } from 'react';
import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';

import style from './projects.module.css';
import { useScene } from '../../scenes/SceneContext';
import Scenes from '../../scenes/Scenes';
import ProjectItem from './item/ProjectItem';
import ProjectInfo from './info/ProjectInfo';

const Projects = () => {

    const { setScene } = useScene();
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        setScene(Scenes.PROJECTS);

        return () => {
            setShowInfoModal(false);
        }
    }, [])

    const openInfoModal = (projectInfo) => {
        setShowInfoModal(true);
        setModalData({});
    }

    return (
        <Container>
            <Content>
                <Content.Header text={"My Projects"} />

                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        Lorem ipsum dolor sit amet, consectetur elit.
                            Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed.
                            Maecenas faucibus leo a consectetur egestas.
                    </TypewriterParagraph>
                </TypewriterProvider>

                <div>
                    <p className={style.filterHeader}>Filter by category:</p>
                    <div className={style.btnsContainer}>
                        <button className={style.filterBtn + " " + style.active}>All</button>
                        <button className={style.filterBtn}>Web</button>
                        <button className={style.filterBtn}>Games</button>
                    </div>
                </div>

                <div>
                    <p className={style.filterHeader}>Filter by tech:</p>
                    <div className={style.btnsContainer}>
                        <button className={style.filterBtn + " " + style.active}>All</button>
                        <button className={style.filterBtn}>JavaScript</button>
                        <button className={style.filterBtn}>Python</button>
                        <button className={style.filterBtn}>React</button>
                        <button className={style.filterBtn}>Unity3D</button>
                    </div>
                </div>
            </Content>

            <div className={style.itemContainer}>
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
                <ProjectItem onClick={openInfoModal} />
            </div>

            <ProjectInfo {...modalData} show={showInfoModal} handleClose={() => setShowInfoModal(false)} />
        </Container>
    );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';

import style from './projects.module.css';
import { useScene } from '../../scenes/SceneContext';
import Scenes from '../../scenes/Scenes';
import ProjectItem from './item/ProjectItem';
import ProjectModal from './modal/ProjectModal';

import { categories, techs, projectsInfo } from './info';

const Projects = () => {

    const { setScene } = useScene();
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const [categoryFilter, setCategoryFilter] = useState(categories.ALL);
    const [techFilter, setTechFilter] = useState(techs.ALL);

    useEffect(() => {
        setScene(Scenes.PROJECTS);

        return () => {
            setShowInfoModal(false);
        }
    }, []);


    const openInfoModal = (projectInfo) => {
        setShowInfoModal(true);
        setModalData({ ...projectInfo });
    }

    const getFilterBtnStyle = (currentFilter, filter) => `${style.filterBtn} ${currentFilter === filter ? style.active : ''}`;

    const isProjectFiltered = (projectInfo) => {
        if (categoryFilter !== categories.ALL && projectInfo.category !== categoryFilter) {
            return false;
        }
        if (techFilter !== techs.ALL && !projectInfo.techs.includes(techFilter)) {
            return false;
        }

        return true;
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
                        <button onClick={() => setCategoryFilter(categories.ALL)} className={getFilterBtnStyle(categoryFilter, categories.ALL)}>All</button>
                        <button onClick={() => setCategoryFilter(categories.WEB)} className={getFilterBtnStyle(categoryFilter, categories.WEB)}>Web</button>
                        <button onClick={() => setCategoryFilter(categories.GAMES)} className={getFilterBtnStyle(categoryFilter, categories.GAMES)}>Games</button>
                    </div>
                </div>

                <div>
                    <p className={style.filterHeader}>Filter by tech:</p>
                    <div className={style.btnsContainer}>
                        <button onClick={() => setTechFilter(techs.ALL)} className={getFilterBtnStyle(techFilter, techs.ALL)}>All</button>
                        <button onClick={() => setTechFilter(techs.JAVASCRIPT)} className={getFilterBtnStyle(techFilter, techs.JAVASCRIPT)}>JavaScript</button>
                        <button onClick={() => setTechFilter(techs.PYTHON)} className={getFilterBtnStyle(techFilter, techs.PYTHON)}>Python</button>
                        <button onClick={() => setTechFilter(techs.REACT)} className={getFilterBtnStyle(techFilter, techs.REACT)}>React</button>
                        <button onClick={() => setTechFilter(techs.UNITY3D)} className={getFilterBtnStyle(techFilter, techs.UNITY3D)}>Unity3D</button>
                    </div>
                </div>
            </Content>

            <div className={style.itemContainer}>
                {projectsInfo.map(project => {
                    return isProjectFiltered(project) ? <ProjectItem key={project.id} projectInfo={project} openModal={openInfoModal} /> : null;
                })}
            </div>

            <ProjectModal {...modalData} show={showInfoModal} handleClose={() => setShowInfoModal(false)} />
        </Container>
    );
};

export default Projects;
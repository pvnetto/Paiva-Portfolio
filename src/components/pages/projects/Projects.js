import React, { useState, useEffect } from 'react';
import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';

import * as style from './projects.module.css';
import Scenes from '../../scenes/Scenes';
import ProjectItem from './item/ProjectItem';
import ProjectModal from './modal/ProjectModal';

import { categories, techs } from './info/types';
import { projectsInfo } from './info'
import { isProjectFilteredOut } from './filters/utils';
import CategoryFilter from './filters/CategoryFilter';
import TechFilter from './filters/TechFilter';
import useSceneChange from '../../scenes/useSceneChange';

const Projects = () => {

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [modalData, setModalData] = useState(projectsInfo[0]);

    const [categoryFilter, setCategoryFilter] = useState(categories.ALL);
    const [techFilter, setTechFilter] = useState(techs.ALL);

    const { currentScene } = useSceneChange(Scenes.PROJECTS);

    useEffect(() => {
        return () => {
            setShowInfoModal(false);
        }
    }, []);

    const openInfoModal = (projectInfo) => {
        setShowInfoModal(true);
        setModalData({ ...projectInfo });
    }

    return (
        <>
            <Container className={`${style.pageContainer} ${showInfoModal ? style.modalOpen : ''}`}>
                <Content className={`${style.projectHeader}`}>
                    <Content.Header text={"My Projects"} />

                    <TypewriterProvider>
                        <TypewriterParagraph order={0}>
                            Here are some of the projects I've had the priviledge to work on.
                            You can click on them see more details.
                    </TypewriterParagraph>
                    </TypewriterProvider>

                    <CategoryFilter setCategoryFilter={setCategoryFilter} activeCategory={categoryFilter} />
                    <TechFilter setTechFilter={setTechFilter} activeTech={techFilter} />
                </Content>

                <div className={style.itemContainer}>
                    {projectsInfo.map((project, idx) => {
                        const isHidden = isProjectFilteredOut(techFilter, categoryFilter, project);
                        return <ProjectItem key={idx} projectInfo={project} openModal={openInfoModal} hidden={isHidden} />;
                    })}
                </div>
            </Container>
            <ProjectModal {...modalData} show={showInfoModal} handleClose={() => setShowInfoModal(false)} />
        </>
    );
};

export default Projects;
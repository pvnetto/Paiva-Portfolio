import React, { useState, useEffect } from 'react';
import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';

import style from './projects.module.css';
import Scenes from '../../scenes/Scenes';
import ProjectItem from './item/ProjectItem';
import ProjectModal from './modal/ProjectModal';

import { categories, techs, projectsInfo } from './info';
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

    const isProjectFiltered = (projectInfo) => {
        if (categoryFilter !== categories.ALL && projectInfo.category !== categoryFilter) {
            return true;
        }
        if (techFilter !== techs.ALL && !projectInfo.techs.includes(techFilter)) {
            return true;
        }

        return false;
    }

    const openInfoModal = (projectInfo) => {
        setShowInfoModal(true);
        setModalData({ ...projectInfo });
    }

    return (
        <Container className={style.pageContainer}>
            <Content className={`${style.projectHeader} ${showInfoModal ? style.modalOpen : ''}`}>
                <Content.Header text={"My Projects"} />

                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        Lorem ipsum dolor sit amet, consectetur elit.
                            Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed.
                            Maecenas faucibus leo a consectetur egestas.
                    </TypewriterParagraph>
                </TypewriterProvider>

                <CategoryFilter setCategoryFilter={setCategoryFilter} activeCategory={categoryFilter} />
                <TechFilter setTechFilter={setTechFilter} activeTech={techFilter} />
            </Content>

            <div className={style.itemContainer}>
                {projectsInfo.map(project => {
                    const isHidden = isProjectFiltered(project);
                    return <ProjectItem key={project.id} projectInfo={project} openModal={openInfoModal} hidden={isHidden} />;
                })}
            </div>

            <ProjectModal {...modalData} show={showInfoModal} handleClose={() => setShowInfoModal(false)} />
        </Container>
    );
};

export default Projects;
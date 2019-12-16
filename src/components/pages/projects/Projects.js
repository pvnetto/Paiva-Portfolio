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
import Button from '../../commons/buttons/Button';

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

    const TechButton = ({ tech, children }) => {
        return <Button onClick={() => setTechFilter(tech)} active={techFilter === tech} className={style.filterBtn}>{children}</Button>
    }

    const CategoryButton = ({ category, children }) => {
        return <Button onClick={() => setCategoryFilter(category)} active={categoryFilter === category} className={style.filterBtn}>{children}</Button>
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

                <div>
                    <p className={style.filterHeader}>Filter by category:</p>
                    <div className={style.btnsContainer}>
                        <CategoryButton category={categories.ALL}>All</CategoryButton>
                        <CategoryButton category={categories.WEB}>Web</CategoryButton>
                        <CategoryButton category={categories.GAMES}>Games</CategoryButton>
                    </div>
                </div>

                <div>
                    <p className={style.filterHeader}>Filter by tech:</p>
                    <div className={style.btnsContainer}>
                        <TechButton tech={techs.ALL}>All</TechButton>
                        <TechButton tech={techs.JAVASCRIPT}>JavaScript</TechButton>
                        <TechButton tech={techs.PYTHON}>Python</TechButton>
                        <TechButton tech={techs.REACT}>React</TechButton>
                        <TechButton tech={techs.UNITY3D}>Unity3D</TechButton>
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
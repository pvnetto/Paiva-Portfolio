import React from 'react';

import Container from '../../commons/container';
import Content from '../../commons/content';
import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';
import useSceneChange from '../../scenes/useSceneChange';
import Scenes from '../../scenes/Scenes';
import Button from '../../commons/buttons/Button';

import resumePDF from '../../../public/pdf/paiva_resume.pdf';
import style from './about.module.css';

const About = () => {

    const { currentScene } = useSceneChange(Scenes.ABOUT);

    return (
        <Container>
            <Content>
                <Content.Header text={"About Me"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        Hi, I'm Paiva, a 23 y/o front-end developer and game programmer based in Natal/RN, Brazil.
                             I hold a bachelor's degree in Information Technology from UFRN (Federal University of Rio Grande do Norte),
                             and even though I learned a lot in college, I love learning new technologies, so most of my programming
                             knowledge is self-taught.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                        Some of my passions are: Coffee, my cat, playing competitive games, learning new stuff, and working really hard on new projects with
                        equally hard-working people. So if you're interested in any of this, feel free to contact me.
                    </TypewriterParagraph>
                </TypewriterProvider>

                <a className={style.btn} href={resumePDF} target="_blank"><Button>MY RESUME</Button></a>
            </Content>
        </Container>
    );
};

export default About;
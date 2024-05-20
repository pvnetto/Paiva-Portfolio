import React from 'react';

import Container from '../../commons/container';
import Content from '../../commons/content';
import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';
import useSceneChange from '../../scenes/useSceneChange';
import Scenes from '../../scenes/Scenes';
import Button from '../../commons/buttons/Button';

import resumePDF from '../../../public/pdf/paiva_resume_2024.pdf';
import * as style from './about.module.css';

const About = () => {

    const { currentScene } = useSceneChange(Scenes.ABOUT);

    return (
        <Container>
            <Content>
                <Content.Header text={"About Me"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        Hi, I'm Paiva, a 28 y/o game programmer based in Natal/RN, Brazil.
                             I hold a bachelor's degree in Information Technology from UFRN (Federal University of Rio Grande do Norte),
                             have been making games since 2016, and started working in tech in 2020.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                             I've been fortunate enough to work on incredible projects,
                             like Fortnite: Battle Royale (Epic Games), Wonderbox: The Adventure Maker (Aquiris Game Studio), Growtopia (Ubisoft) and many other
                             authoral projects, and currently work as a Senior Gameplay Programmer at Epic Games.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={2}>
                        Some of my passions are: Coffee, my cat Griselda, playing competitive games, learning new stuff, and working hard on new projects with
                        equally hard-working people. So if you're interested in any of this, feel free to contact me.
                    </TypewriterParagraph>
                </TypewriterProvider>

                <a className={style.btn} href={resumePDF} target="_blank"><Button>MY RESUME</Button></a>
            </Content>
        </Container>
    );
};

export default About;
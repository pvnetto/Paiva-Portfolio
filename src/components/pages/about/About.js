import React, { useEffect } from 'react';

import Container from '../../commons/container';
import Content from '../../commons/content';
import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';
import useSceneChange from '../../scenes/useSceneChange';
import Scenes from '../../scenes/Scenes';

const About = () => {

    const { currentScene } = useSceneChange(Scenes.ABOUT);

    return (
        <Container>
            <Content>
                <Content.Header text={"About Me"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        My name is Paiva, I'm a 23 y/o front-end developer and game programmer based in Natal/RN, Brazil.
                            I'm an Information Technology graduate from UFRN (Federal University of Rio Grande do Norte),
                            but even though I learned a lot in college, most of my programming knowledge is self-taught as
                            I love learning new technologies and working on new projects.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                        Some of my passions are: Coffee, my cat, playing competitive games, learning new stuff, and working really hard on new projects with
                        equally hard-working people. So if you're interested in any of this, feel free to contact me.
                    </TypewriterParagraph>
                </TypewriterProvider>
            </Content>
        </Container>
    );
};

export default About;
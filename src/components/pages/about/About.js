import React, { useEffect } from 'react';

import Container from '../../commons/container';
import Content from '../../commons/content';
import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';
import { useScene } from '../../scenes/SceneContext';
import Scenes from '../../scenes/Scenes';

import style from './about.module.css';

const About = () => {

    const { setScene } = useScene();

    useEffect(() => {
        setScene(Scenes.ABOUT);
    }, []);

    return (
        <Container>
            <Content>
                <Content.Header text={"About Me"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        Lorem ipsum dolor sit amet, consectetur elit.
                            Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed.
                            Maecenas faucibus leo a consectetur egestas.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                        Lorem ipsum dolor sit amet, consectetur elit.
                            Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed.
                            Maecenas faucibus leo a consectetur egestas.
                    </TypewriterParagraph>
                </TypewriterProvider>
            </Content>
        </Container>
    );
};

export default About;
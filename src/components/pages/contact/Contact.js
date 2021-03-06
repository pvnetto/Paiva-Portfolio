import React, { useEffect } from 'react';

import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';

import useSceneChange from '../../scenes/useSceneChange';
import Scenes from '../../scenes/Scenes';

import ContactForm from './form/ContactForm';

const Contact = () => {

    const { currentScene } = useSceneChange(Scenes.CONTACT);

    return (
        <Container>
            <Content>
                <Content.Header text={"Contact Me"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        I'm currently available for work. If you're interested in working with me,
                        please send a message, I'd love to hear about your projects!
                    </TypewriterParagraph>
                </TypewriterProvider>

                <ContactForm />
            </Content>
        </Container>
    );
};

export default Contact;
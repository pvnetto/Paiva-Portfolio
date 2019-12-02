import React, { useEffect } from 'react';

import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';

import { useScene } from '../../scenes/SceneContext';
import Scenes from '../../scenes/Scenes';

import style from './contact.module.css';

const Contact = () => {

    const { setScene } = useScene();

    useEffect(() => {
        setScene(Scenes.CONTACT);
    }, []);

    return (
        <Container>
            <Content>
                <Content.Header text={"Contact Me"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam at ligula finibus, laoreet lectus et, placerat urna.
                    </TypewriterParagraph>
                </TypewriterProvider>

                <form className={style.contactForm} action="">
                    <div>
                        <input name="name" type="text" placeholder="Name" />
                        <input name="email" type="email" placeholder="E-mail" />
                    </div>
                    <div>
                        <input name="subject" type="text" placeholder="Subject" />
                    </div>
                    <div>
                        <textarea name="message" type="text" placeholder="Message" />
                    </div>
                    <div className={style.btnContainer}>
                        <button>Send</button>
                    </div>
                </form>
            </Content>
        </Container>
    );
};

export default Contact;
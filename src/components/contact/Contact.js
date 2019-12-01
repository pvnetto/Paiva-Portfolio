import React from 'react';
import Content from '../commons/content';
import Container from '../commons/container';

import style from './contact.module.css';
import BlinkCaret from '../commons/caret/BlinkCaret';

const Contact = () => {
    return (
        <Container>
            <Content>
                <Content.Header text={"Contact Me"} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam at ligula finibus, laoreet lectus et, placerat urna. <BlinkCaret /></p>
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
import React from 'react';
import Content from '../commons/content';
import Container from '../commons/container';

import style from './contact.module.css';

const Contact = () => {
    return (
        <Container>
            <Content>
                <Content.Header>Contact Me</Content.Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam at ligula finibus, laoreet lectus et, placerat urna.</p>
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
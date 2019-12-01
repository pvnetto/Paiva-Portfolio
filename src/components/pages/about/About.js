import React from 'react';
import Container from '../../commons/container';
import Content from '../../commons/content';

import style from './about.module.css';
import BlinkCaret from '../../commons/caret/BlinkCaret';

const About = () => {

    return (
        <Container>
            <Content>
                <Content.Header text={"About Me"} />
                <p>Lorem ipsum dolor sit amet, consectetur <Content.Emphasized>adipiscing</Content.Emphasized> elit. Etiam at ligula finibus, laoreet lectus
                et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed. Maecenas faucibus leo a consectetur egestas.</p>

                <p>Morbi id volutpat odio. Quisque mollis <Content.Emphasized>luctus</Content.Emphasized> egestas. Mauris orci risus, dignissim quis ex ut,
                        efficitur convallis odio. Praesent et dui nec <Content.Emphasized>ipsum</Content.Emphasized> rhoncus vestibulum. Sed aliquam lectus nec
                        sapien mattis, vel ultrices nisi congue.<BlinkCaret /></p>
            </Content>
        </Container>
    );
};

export default About;
import React from 'react';
import Container from '../commons/Container';

import style from './about.module.css';

const About = () => {
    return (
        <Container>
            <div>
                <div className={style.container}>
                    <h1 className={style.header}>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <span className={style.emphasized}>adipiscing</span> elit. Etiam at ligula finibus, laoreet lectus et, placerat urna.
                        Donec maximus sollicitudin neque, non consequat orci convallis sed. Maecenas faucibus leo a consectetur egestas.
                    </p>
                    <p>
                        Morbi id volutpat odio. Quisque mollis <span className={style.emphasized}>luctus</span> egestas. Mauris orci risus, dignissim quis ex ut,
                        efficitur convallis odio. Praesent et dui nec <span className={style.emphasized}>ipsum</span> rhoncus vestibulum. Sed aliquam lectus nec sapien mattis,
                        vel ultrices nisi congue.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
import React, { useEffect } from 'react';

import Content from '../../commons/content';
import Container from '../../commons/container';

import { TypewriterProvider } from '../../commons/typewriter/TypewriterContext';
import TypewriterParagraph from '../../commons/typewriter/TypewriterParagraph';
import Scenes from '../../scenes/Scenes';
import useSceneChange from '../../scenes/useSceneChange';

const Skills = () => {

    const { currentScene } = useSceneChange(Scenes.SKILLS);

    return (
        <Container>
            <Content>
                <Content.Header text={"My Skills"} />
                <TypewriterProvider>
                    <TypewriterParagraph order={0}>
                        The areas I have the most experience with are front-end development and game programming, but I also have some experience with machine
                        learning (namely Reinforcement Learning) and back-end programming.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                        My favorite technologies for front-end development are Javascript (ES6), React, Redux, NextJS, Bootstrap 4, SASS,
                        Webpack and ThreeJS. Besides those, I also use Figma to sketch my applications before production.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={2}>
                        For game development, I work mostly with Unity3D (C#) and Unreal Engine 4 (C++/Blueprint).
                    </TypewriterParagraph>
                    <TypewriterParagraph order={3}>
                        Beyond that, I also have knowledge in Python and some of its machine learning frameworks, such as Tensorflow and Keras.
                    </TypewriterParagraph>
                </TypewriterProvider>
            </Content>
        </Container>
    );
};

export default Skills;
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
                        learning (namely Reinforcement Learning) and some knowledge in back-end programming.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                        My favorite technologies for front-end development are Javascript (ES6), React, Redux, NextJS, Bootstrap 4, SASS,
                        Webpack and ThreeJS. For game development, I usually work with Unity3D (C#) and Unreal Engine 4 (C++/Blueprint) and
                        even the areas I'm most comfortable working with are gameplay, AI and graphics programming. Beyond that, I also have
                        knowledge in Python and some of its machine learning frameworks, such as Tensorflow and Keras.
                    </TypewriterParagraph>
                </TypewriterProvider>
            </Content>
        </Container>
    );
};

export default Skills;
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
                        My main area of expertise is game programming, but I've also worked as a Front-End Engineer before, and had some experience with machine
                        learning and back-end programming in the past.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={1}>
                        For game development, I've mostly worked with Unreal Engine during my career, but I'm also familiar with Unity3D, have worked with custom engines in the past,
                        and even developed some engine systems as work and side-projects, like renderers, serializers, file system managers and whatnot. I honestly believe that as a programmer,
                        learning about game engines and not the game engines is the way to go. There's no point in learning them as tools and not understanding the underlying tech that makes them tick.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={2}>
                        As for front-end development, my go-to tech stack is Javascript (ES6), React, Redux, NextJS, Bootstrap 4, SASS,
                        Webpack and ThreeJS. Besides those, I also use Figma to sketch my applications before production.
                    </TypewriterParagraph>
                    <TypewriterParagraph order={3}>
                        Beyond that, I'm also familiar with a plethora of unrelated technologies just from tinkering around with code, so if I didn't mention something here, there's a chance
                        I know it still, or would be willing to learn it.
                    </TypewriterParagraph>
                </TypewriterProvider>
            </Content>
        </Container>
    );
};

export default Skills;
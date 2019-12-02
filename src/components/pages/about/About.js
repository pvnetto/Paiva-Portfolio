import React, { useState, useEffect, useContext } from 'react';

import Container from '../../commons/container';
import Content from '../../commons/content';
import BlinkCaret from '../../commons/caret/BlinkCaret';

import style from './about.module.css';

const TypewriterContext = React.createContext();
const TypewriterProvider = ({ children }) => {

    const [currentParagraph, setCurrentParagraph] = useState(0);

    const incrementParagraph = () => {
        if (currentParagraph + 1 < children.length) {
            setCurrentParagraph(currentParagraph + 1)
        }
    }

    return (
        <TypewriterContext.Provider value={{ currentParagraph, incrementParagraph }}>
            {children}
            {/* {children.map((child, idx) => (child(idx, incrementParagraph, idx === currentParagraph)))} */}
        </ TypewriterContext.Provider>
    )
}

const TypewriterText = ({ children, idx, charactersPerSecond = 100 }) => {
    const [currentText, setCurrentText] = useState("");
    const [characters, setCharacters] = useState([]);
    const [isTyping, setTyping] = useState(false);

    const { currentParagraph, incrementParagraph } = useContext(TypewriterContext);

    const typeDelay = 1000 / charactersPerSecond;

    useEffect(() => {
        setTyping(currentParagraph === idx);
    }, [currentParagraph]);

    useEffect(() => {
        if (isTyping) {
            setCharacters([...children]);
        }
    }, [isTyping]);

    useEffect(() => {
        type(characters);
    }, [characters]);

    const type = (characters) => {
        if (characters.length > 0) {
            setTimeout(() => {
                const [character] = characters.splice(0, 1);

                if (characters.length === 0) {
                    incrementParagraph();
                }

                setCurrentText(currentText + character);
                setCharacters([...characters]);
            }, typeDelay);
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            <p style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', margin: '0 0' }}>{currentText}{isTyping ? <BlinkCaret /> : null}</p>
            <p style={{ visibility: 'hidden' }}>{children}</p>
        </div>
    )
}



const About = () => {

    return (
        <Container>
            <Content>
                <Content.Header text={"About Me"} />
                <TypewriterProvider>
                    <TypewriterText idx={0}>
                        Lorem ipsum dolor sit amet, consectetur elit.
                            Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed.
                            Maecenas faucibus leo a consectetur egestas.
                    </TypewriterText>
                    <TypewriterText idx={1}>
                        Lorem ipsum dolor sit amet, consectetur elit.
                            Etiam at ligula finibus, laoreet lectus et, placerat urna. Donec maximus sollicitudin neque, non consequat orci convallis sed.
                            Maecenas faucibus leo a consectetur egestas.
                    </TypewriterText>
                </TypewriterProvider>

            </Content>
        </Container>
    );
};

export default About;
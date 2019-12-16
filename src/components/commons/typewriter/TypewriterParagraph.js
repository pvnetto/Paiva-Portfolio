import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useTypewriter } from './TypewriterContext';
import BlinkCaret from '../caret/BlinkCaret';

const TypewriterParagraph = ({ children, order = 0, typeCyclesPerSecond = 20, charactersPerCycle = 20 }) => {
    const [currentText, setCurrentText] = useState("");
    const [characters, setCharacters] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const { currentParagraph, incrementParagraph } = useTypewriter();

    const typeDelay = 1000 / typeCyclesPerSecond;

    useEffect(() => {
        if (currentParagraph === order) {
            setCharacters([...children]);
        }

        setIsTyping(currentParagraph === order);
    }, [currentParagraph]);

    // When the array of characters is changed, this effect is triggered to type the next character
    useEffect(() => {
        typeNextCharacter(characters);
    }, [characters]);

    const typeNextCharacter = (characters) => {
        if (characters.length > 0) {
            setTimeout(() => {
                const cycleCharacters = characters.splice(0, charactersPerCycle);

                if (characters.length === 0) {
                    incrementParagraph();
                }

                setCurrentText(currentText.concat(...cycleCharacters));
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

TypewriterParagraph.propTypes = {
    order: PropTypes.number.isRequired,
    typeCyclesPerSecond: PropTypes.number,
    charactersPerCycle: PropTypes.number
}

export default TypewriterParagraph;
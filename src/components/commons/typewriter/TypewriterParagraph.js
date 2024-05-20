import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useTypewriter } from './TypewriterContext';
import BlinkCaret from '../caret/BlinkCaret';

const TypewriterParagraph = ({ children, order = 0, typeCyclesPerSecond = 30, charactersPerCycle = 20 }) => {

    const [isTyping, setIsTyping] = useState(false);
    const { currentParagraph, incrementParagraph } = useTypewriter();
    const paragraphRef = useRef();

    // State variables
    let currentText = "";
    let characters = "";
    const typeDelay = 1000 / typeCyclesPerSecond;

    useEffect(() => {
        setIsTyping(currentParagraph === order);
    }, [currentParagraph]);

    // When the array of characters is changed, this effect is triggered to type the next character
    useEffect(() => {
        if (currentParagraph === order) {
            characters = [...children];
        }

        typeNextCharacter(characters);
    }, [isTyping]);

    const typeNextCharacter = (characters) => {
        if (characters.length > 0) {
            setTimeout(() => {
                const cycleCharacters = characters.splice(0, charactersPerCycle);

                currentText = currentText.concat(...cycleCharacters);
                if (paragraphRef.current)
                {
                    paragraphRef.current.textContent = currentText;
                }

                if (characters.length === 0) {
                    incrementParagraph();
                }
                else {
                    typeNextCharacter(characters);
                }
            }, typeDelay);
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            <p style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', margin: '0 0' }}>
                <span ref={paragraphRef}></span>{isTyping ? <BlinkCaret /> : null}
            </p>
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
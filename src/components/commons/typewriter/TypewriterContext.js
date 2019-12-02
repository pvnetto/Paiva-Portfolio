import React, { useState, useContext } from 'react';

const TypewriterContext = React.createContext();
export const useTypewriter = () => useContext(TypewriterContext);
export const TypewriterProvider = ({ children }) => {

    const [currentParagraph, setCurrentParagraph] = useState(0);

    const incrementParagraph = () => {
        if (currentParagraph + 1 < children.length) {
            setCurrentParagraph(currentParagraph + 1)
        }
    }

    return (
        <TypewriterContext.Provider value={{ currentParagraph, incrementParagraph }}>
            {children}
        </ TypewriterContext.Provider>
    )
}

export default TypewriterContext;
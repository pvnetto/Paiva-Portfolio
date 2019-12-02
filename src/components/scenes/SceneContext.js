import React, { useState, useContext } from 'react';
import Scenes from './Scenes';

export const SceneContext = React.createContext();
export const useScene = () => useContext(SceneContext);
export const SceneProvider = ({ children }) => {

    const [currentScene, setScene] = useState(Scenes.HOME);

    return (
        <SceneContext.Provider value={{ currentScene, setScene }}>
            {children}
        </ SceneContext.Provider>
    )
}

export default SceneContext;
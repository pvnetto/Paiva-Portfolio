import React, { useEffect } from 'react';
import { useScene } from './SceneContext';

const useSceneChange = (sceneName) => {
    const { setScene } = useScene();

    useEffect(() => {
        setScene(sceneName);
    }, [])

    return sceneName;
};

export default useSceneChange;
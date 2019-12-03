import React, { useState, useRef, useEffect, useContext } from 'react';
import { extend, useThree, useFrame } from 'react-three-fiber';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
extend({ EffectComposer, RenderPass, GlitchPass, BloomPass, FilmPass })

const Effects = ({ currentScene }) => {
    const { gl, scene, camera, size } = useThree();

    const composer = useRef();
    const [isGlitching, setIsGlitching] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsGlitching(false);
        }, 1000);
    }, [])

    useEffect(() => {
        if (!isGlitching) {
            setIsGlitching(true);

            setTimeout(() => {
                setIsGlitching(false);
            }, 1000);
        }
    }, [currentScene]);

    useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
    useFrame(() => composer.current.render(), 1);

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" args={[scene, camera]} renderToScreen />
            {isGlitching ? <glitchPass attachArray="passes" renderToScreen /> : null}
            <bloomPass attachArray="passes" args={[1, 25, 0.8, 1024]} />
            <filmPass attachArray="passes" args={[0.35, 0.025, 648, false]} renderToScreen />
        </effectComposer>
    )
}

export default Effects;
import React, { useState, useRef, useEffect } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import PropTypes from 'prop-types';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import Scenes from '../../scenes/Scenes';
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
            }, 350);
        }
    }, [currentScene]);

    useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
    useFrame(() => composer.current.render(), 1);

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attach="passes-0" args={[scene, camera]} />
            {isGlitching ? <glitchPass attach="passes-1" enabled={isGlitching} clear={isGlitching} /> : <renderPass attach="passes-1" args={[scene, camera]} />}
            <bloomPass attach="passes-2" args={[1.0, 25, 0.8, 1024]} />
            <filmPass attach="passes-3" args={[0.35, 0.025, 1024, false]} />
        </effectComposer>
    )
}

Effects.propTypes = {
    currentScene: PropTypes.oneOf(Object.values(Scenes)).isRequired,
}

export default Effects;
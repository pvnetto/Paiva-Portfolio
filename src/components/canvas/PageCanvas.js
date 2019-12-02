import React, { useState, useRef, useEffect } from 'react';
import { Canvas, extend, useThree, useFrame, useCamera } from 'react-three-fiber';
import { Euler, Fog, Vector3, Quaternion } from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
extend({ EffectComposer, RenderPass, GlitchPass, BloomPass, FilmPass })

import PlaneMesh from './meshes/PlaneMesh';
import SphereMesh from './meshes/SphereMesh';
import style from './canvas.module.css';

// This empty Component initializes Canvas configurations.
// We can't call useThree from inside PageCanvas because
// Canvas is the Provider for useThree's context, but these components can.
const CanvasClearColor = () => {
    const { gl } = useThree();
    gl.setClearColor(0x000000, 1);

    return <></>
}

const CanvasFog = () => {
    const { scene } = useThree();
    scene.fog = new Fog(0x000000, 1, 60);
    return <></>
}

const Camera = () => {
    const { camera, scene, gl } = useThree();

    const initialRot = new Euler(0.23, 0, 0);

    const [startPos, setStartPos] = useState(new Vector3(0, 2, 0));
    const [targetPos, setTargetPos] = useState(null);

    const [startRot, setStartRot] = useState(null);
    const [targetRot, setTargetRot] = useState(null);

    // The camera's start position equals its initial target position
    useEffect(() => {
        camera.near = 5;

        camera.position.set(startPos.x, startPos.y, startPos.z);
        camera.setRotationFromQuaternion(initialRot);

        const startRotQuat = new Quaternion().setFromEuler(initialRot);
        setStartRot(startRotQuat);

        const targetRotQuat = new Quaternion().setFromEuler(initialRot);
        setTargetRot(targetRotQuat);
        setTargetPos(new Vector3(startPos.x, startPos.y, startPos.z));

        // Forces camera to update the near plane
        camera.updateProjectionMatrix();
    }, []);

    const animationDuration = 0.5;
    let animationTime = 0;

    useFrame((state, delta) => {
        animationTime += delta;
        let animationT = animationTime / animationDuration;
        animationT = Math.min(animationT, 1.0);

        camera.position.lerpVectors(startPos, targetPos, animationT);

        const currentRot = new Quaternion();
        Quaternion.slerp(startRot, targetRot, currentRot, animationT);
        camera.setRotationFromQuaternion(currentRot);
    });

    return <></>
}

const Effects = () => {
    const { gl, scene, camera, size } = useThree();
    const composer = useRef();

    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
    useFrame(() => composer.current.render(), 1);

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" args={[scene, camera]} renderToScreen />
            <bloomPass attachArray="passes" args={[1, 25, 0.7, 1024]} />
            <filmPass attachArray="passes" args={[0.35, 0.025, 648, false]} renderToScreen />
            {isGlitching ? <glitchPass attachArray="passes" renderToScreen /> : null}
        </effectComposer>
    )
}

const PageCanvas = () => {

    return (
        <Canvas className={style.pageCanvas}>
            <directionalLight color={0xffffff} intensity={0.5} />

            <Effects />
            <Camera />
            <CanvasClearColor />
            <CanvasFog />
            <PlaneMesh />
            <SphereMesh />
        </Canvas>
    );
};

export default PageCanvas;
import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber';
import { Euler, Fog, Vector3, Quaternion } from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
extend({ EffectComposer, RenderPass, GlitchPass })

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

    camera.position.y = 2;
    camera.position.z = 0;
    camera.setRotationFromEuler(new Euler(0.23, 0, 0));

    const startPos = new Vector3(camera.position.x, camera.position.y, camera.position.z);
    const targetPos = new Vector3(0, -20, 0);

    const startRot = new Quaternion();
    const targetRot = new Quaternion();
    startRot.setFromEuler(camera.rotation);
    targetRot.setFromEuler(new Euler(0, 0, 0));

    const animationDuration = 0.5;

    let animationTime = 0;

    // useFrame((state, delta) => {
    //     animationTime += delta;
    //     let animationT = animationTime / animationDuration;
    //     animationT = Math.min(animationT, 1.0);

    //     camera.position.lerpVectors(startPos, targetPos, animationT);

    //     const currentRot = new Quaternion();
    //     Quaternion.slerp(startRot, targetRot, currentRot, animationT);
    //     camera.setRotationFromQuaternion(currentRot);
    // });

    return <></>
}

const Effects = () => {
    const { gl, scene, camera, size } = useThree()
    const composer = useRef()
    useEffect(() => void composer.current.setSize(size.width, size.height), [size])
    useFrame(() => composer.current.render(), 1)
    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" args={[scene, camera]} />
            <glitchPass attachArray="passes" renderToScreen />
        </effectComposer>
    )
}

const PageCanvas = () => {

    return (
        <Canvas className={style.pageCanvas} style={{}}>
            <directionalLight color={0xffffff} intensity={0.5} />

            <Camera />
            {/* <Effects /> */}
            <CanvasClearColor />
            <CanvasFog />
            <PlaneMesh />
            <SphereMesh />
        </Canvas>
    );
};

export default PageCanvas;
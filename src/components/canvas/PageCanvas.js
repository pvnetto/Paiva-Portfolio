import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import { Fog } from 'three';

import PlaneMesh from './meshes/PlaneMesh';
import SphereMesh from './meshes/SphereMesh';
import Camera from './camera';
import Effects from './effects';

import { useScene } from '../scenes/SceneContext';

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

const PageCanvas = () => {

    const { currentScene } = useScene();

    return (
        <Canvas className={style.pageCanvas}>
            <directionalLight color={0xffffff} intensity={0.5} />

            <Effects currentScene={currentScene} />
            <Camera />
            <CanvasClearColor />
            <CanvasFog />
            <PlaneMesh />
            <SphereMesh />
        </Canvas>
    );
};

export default PageCanvas;
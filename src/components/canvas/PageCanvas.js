import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import PlaneMesh from './meshes/PlaneMesh';
import { Euler, Fog } from 'three';

import style from './canvas.module.css';

// This empty Component initializes Canvas configurations.
// It's needed because we can't call useThree from inside PageCanvas,
// because Canvas is the Provider for useThree's context.
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
    const { camera } = useThree();

    camera.position.y = 2;
    camera.position.z = 0;
    camera.setRotationFromEuler(new Euler(0.23, 0, 0));


    return <></>
}

const PageCanvas = () => {

    return (
        <Canvas className={style.pageCanvas} style={{}}>
            <directionalLight color={0xffffff} intensity={0.5} />
            <Camera />
            <CanvasClearColor />
            <CanvasFog />
            <PlaneMesh />
        </Canvas>
    );
};

export default PageCanvas;
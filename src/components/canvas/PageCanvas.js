import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import PlaneMesh from './meshes/PlaneMesh';
import { Fog } from 'three';

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
    scene.fog = new Fog(0x000000, 1, 15);
    return <></>
}

const Camera = () => {
    const { camera } = useThree();
    return <></>
}

const PageCanvas = () => {

    return (
        <Canvas style={{ position: 'absolute', width: '100%', height: '100vh' }}>
            <CanvasClearColor />
            <CanvasFog />
            <PlaneMesh />
        </Canvas>
    );
};

export default PageCanvas;
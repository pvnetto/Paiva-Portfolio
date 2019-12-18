import React, { Suspense } from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import { Fog } from 'three';

import TerrainMesh from './meshes/grid/TerrainMesh';
import SphereMesh from './meshes/SphereMesh';
import Camera from './camera';
import Effects from './effects';

import { useScene } from '../scenes/SceneContext';

import style from './canvas.module.css';

import Cup from './meshes/objs/Cup';
import ReactLogo from './meshes/logos/ReactLogo';
import UnityLogo from './meshes/logos/UnityLogo';
import JSLogo from './meshes/logos/JSLogo';
import HTMLLogo from './meshes/logos/HTMLLogo';
import CSSLogo from './meshes/logos/CSSLogo';
import Ufo from './meshes/objs/Ufo';

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
            <Suspense fallback={<SphereMesh />}>
                <directionalLight color={0xffffff} intensity={1} />
                <Effects currentScene={currentScene} />
                <Camera currentScene={currentScene} />
                <CanvasClearColor />
                <CanvasFog />

                <TerrainMesh position={[0, 0, 0]} />
                <SphereMesh />

                <ReactLogo />
                <UnityLogo />
                <JSLogo />
                <HTMLLogo />
                <CSSLogo />

                <Cup />
                <Ufo />

                <mesh position={[0, 0, 0]}>
                    {/* <textGeometry attach="geometry" /> */}
                    <meshBasicMaterial attach="material" color="green" wireframe />
                </mesh>
            </Suspense>
        </Canvas>
    );
};

export default PageCanvas;
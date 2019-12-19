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
import Ufo from './meshes/objs/Ufo';
import Text from './meshes/text/text';
import SkillsCarousel from './meshes/text/SkillsCarousel';

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

                <TerrainMesh position={[0, -1, -10.5]} />
                <SphereMesh />

                <SkillsCarousel />

                <Cup />
                <Ufo />

                <TerrainMesh position={[0, -97, -17.5]} />
            </Suspense>
        </Canvas>
    );
};

export default PageCanvas;
import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';

import { MeshPhongMaterial, MeshBasicMaterial, Vector3 } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import useResponsivePos from '../useResponsivePos';

import ufo from '../../../../public/objs/ufo.obj';

const Ufo = () => {
    const { size } = useThree();

    const sphereRef = useRef();

    // Responsive obj pos parameters
    const startPos = new Vector3(11, -82, -16);
    const endPos = new Vector3(7, -80, -16);
    const centerPos = useResponsivePos(startPos, endPos);

    let animationTime = 0;
    const horizontalMoveMult = 1.3;
    const animationSpeed = 2;

    useFrame((state, delta) => {
        animationTime += delta * animationSpeed;

        const currentSine = Math.sin(animationTime);
        const currentCos = Math.sin(animationTime);

        const currentPos = new Vector3(centerPos.x, centerPos.y, centerPos.z);
        currentPos.x += currentSine * horizontalMoveMult;
        currentPos.y += currentCos;

        sphereRef.current.position.set(currentPos.x, currentPos.y, currentPos.z);
        sphereRef.current.rotation.y += 0.002 * animationSpeed;
    });

    const ufoObj = useLoader(OBJLoader, ufo);
    ufoObj.traverse((node) => {
        if (node.material) {
            node.material = new MeshBasicMaterial({ color: 'green', wireframe: true });
        }
    });

    return (
        <primitive ref={sphereRef} rotation={[0.46, 0, 0]} scale={[2.2, 2.2, 2.2]} object={ufoObj} />
    );
}

export default Ufo;
import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';

import { MeshPhongMaterial, Vector3 } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import useResponsivePos from '../useResponsivePos';
import cup from '../../../../public/objs/cup.obj';

const Cup = () => {
    const meshRef = useRef();
    const sphereRef = useRef();

    const startPos = new Vector3(7, -21, -16);
    const endPos = new Vector3(1, -21, -16);
    const currentPos = useResponsivePos(startPos, endPos);

    useFrame(() => {
        meshRef.current.rotation.y += 0.002;
    });

    const [mugObj] = useLoader(OBJLoader, cup);

    mugObj.traverse((node) => {
        if (node.material) {
            node.material = new MeshPhongMaterial({ color: 'green', wireframe: true });
        }
    });

    return (
        <mesh ref={meshRef} position={currentPos} rotation={[0, 0, 0]} scale={[0.08, 0.08, 0.08]}>
            <primitive ref={sphereRef} attach="geometry" object={mugObj} />
        </mesh>
    );
}

export default Cup;
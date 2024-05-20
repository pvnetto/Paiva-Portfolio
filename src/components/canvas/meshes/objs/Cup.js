import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';

import { MeshPhongMaterial, Vector3 } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import useResponsivePos from '../useResponsivePos';
import cup from '../../../../public/objs/cup.obj';

const Cup = () => {
    const sphereRef = useRef();

    const startPos = new Vector3(9, -21, -16);
    const endPos = new Vector3(1, -21, -16);
    const currentPos = useResponsivePos(startPos, endPos);

    useFrame(() => {
        sphereRef.current.rotation.y += 0.002;
    });

    const mugObj = useLoader(OBJLoader, cup);
    mugObj.traverse((node) => {
        if (node.material) {
            node.material = new MeshPhongMaterial({ color: 'green', wireframe: true });
        }
    });

    return (
        <primitive ref={sphereRef} object={mugObj} position={currentPos} rotation={[0, 0, 0]} scale={0.08} />
    );
}

export default Cup;
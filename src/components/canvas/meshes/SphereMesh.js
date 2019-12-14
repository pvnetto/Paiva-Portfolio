import React, { useRef } from 'react';
import { TriangleStripDrawMode, Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';

import useResponsivePos from './useResponsivePos';

const SphereMesh = () => {
    const meshRef = useRef();
    const sphereRef = useRef();

    const startPos = new Vector3(5, 6, -11);
    const endPos = new Vector3(5, 7, -11);
    const currentPos = useResponsivePos(startPos, endPos);

    useFrame(() => {
        meshRef.current.rotation.y += 0.005;
    });

    const verticesOfCube = [
        -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
        -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
    ];

    const indicesOfFaces = [
        2, 1, 0, 0, 3, 2,
        0, 4, 7, 7, 3, 0,
        0, 1, 5, 5, 4, 0,
        1, 2, 6, 6, 5, 1,
        2, 3, 7, 7, 6, 2,
        4, 5, 6, 6, 7, 4
    ];

    return (
        <mesh ref={meshRef} position={currentPos} drawMode={TriangleStripDrawMode}>
            {/* <sphereGeometry ref={sphereRef} attach="geometry" args={[4.5, 64, 64, 6, Math.random() * 6, Math.random() * 6]} /> */}
            {/* <dodecahedronBufferGeometry ref={sphereRef} attach="geometry" args={[3]} /> */}
            <polyhedronGeometry ref={sphereRef} attach="geometry" args={[verticesOfCube, indicesOfFaces, 3, 2]} />
            <meshBasicMaterial attach="material" wireframe color="green" />
        </mesh>
    );
}

export default SphereMesh;
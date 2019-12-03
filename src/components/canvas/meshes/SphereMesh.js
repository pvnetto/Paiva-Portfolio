import React, { useRef } from 'react';
import { TriangleStripDrawMode } from 'three';
import { useFrame } from 'react-three-fiber';

const SphereMesh = () => {
    const meshRef = useRef();
    const sphereRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.005;
        // meshRef.current.rotation.y += 0.01;
    });

    var verticesOfCube = [
        -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
        -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
    ];

    var indicesOfFaces = [
        2, 1, 0, 0, 3, 2,
        0, 4, 7, 7, 3, 0,
        0, 1, 5, 5, 4, 0,
        1, 2, 6, 6, 5, 1,
        2, 3, 7, 7, 6, 2,
        4, 5, 6, 6, 7, 4
    ];

    return (
        <mesh ref={meshRef} position={[5, 6, -11]} drawMode={TriangleStripDrawMode}>
            {/* <sphereGeometry ref={sphereRef} attach="geometry" args={[4.5, 64, 64, 6, Math.random() * 6, Math.random() * 6]} /> */}
            {/* <dodecahedronBufferGeometry ref={sphereRef} attach="geometry" args={[3]} /> */}
            <polyhedronGeometry ref={sphereRef} attach="geometry" args={[verticesOfCube, indicesOfFaces, 3, 2]} />
            <meshBasicMaterial attach="material" wireframe color="green" />
        </mesh>
    );
}

export default SphereMesh;
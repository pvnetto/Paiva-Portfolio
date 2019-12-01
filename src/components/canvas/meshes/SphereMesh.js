import React, { useRef } from 'react';
import { TriangleStripDrawMode } from 'three';
import { useFrame } from 'react-three-fiber';

const SphereMesh = () => {
    const meshRef = useRef();
    const sphereRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.x += 0.01;
    })

    return (
        <mesh ref={meshRef} position={[5, 5, -10]} drawMode={TriangleStripDrawMode}>
            <sphereGeometry ref={sphereRef} attach="geometry" args={[4.5, 64, 64, 6, Math.random() * 6, Math.random() * 6]} />
            <meshBasicMaterial attach="material" wireframe color="green" />
        </mesh>
    );
}

export default SphereMesh;
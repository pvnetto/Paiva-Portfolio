import React, { useRef } from 'react';
import { TriangleStripDrawMode, TextureLoader, DoubleSide } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

import reactLogo from '../../../public/images/react_logo.png';

const TexturedSphere = () => {
    const meshRef = useRef();
    const sphereRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.y += 0.01;
    });

    const [reactTexture] = useLoader(TextureLoader, reactLogo);

    return (
        <mesh ref={meshRef} position={[5, -10, -15]} rotation={[0, 0, 0]}>
            <planeGeometry ref={sphereRef} attach="geometry" args={[5, 5]} />
            {/* <meshBasicMaterial attach="material" wireframe color="green" /> */}
            {reactTexture && <meshBasicMaterial map={reactTexture} attach="material" color="white" transparent opacity={0.3} side={DoubleSide} />}
        </mesh>
    );
}

export default TexturedSphere;
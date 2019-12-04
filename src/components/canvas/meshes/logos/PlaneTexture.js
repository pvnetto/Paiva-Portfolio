import React, { useRef } from 'react';
import { TextureLoader, DoubleSide, Vector3 } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

const PlaneTexture = ({ textureURL, order }) => {
    const meshRef = useRef();
    const sphereRef = useRef();

    const animationRadius = 6;
    const animationSpeed = 1.3;
    const center = new Vector3(8, -40, -15);
    let animationT = animationSpeed * order;

    useFrame((state, delta) => {
        animationT += delta * animationSpeed;

        const sinVal = Math.sin(animationT) * animationRadius;
        const cosVal = Math.cos(animationT) * animationRadius;
        const currentDisplacement = new Vector3(cosVal, sinVal, 0);
        const currentPos = new Vector3(center.x, center.y, center.z).add(currentDisplacement);
        meshRef.current.position.set(currentPos.x, currentPos.y, currentPos.z);
    });

    const [texture] = useLoader(TextureLoader, textureURL);

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]}>
            <planeGeometry ref={sphereRef} attach="geometry" args={[5, 5]} />
            {texture && <meshBasicMaterial map={texture} attach="material" color="green" transparent opacity={0.3} side={DoubleSide} />}
        </mesh>
    );
}

export default PlaneTexture;
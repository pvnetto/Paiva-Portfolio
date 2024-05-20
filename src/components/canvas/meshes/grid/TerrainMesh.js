import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { DoubleSide, TriangleStripDrawMode, Float32BufferAttribute } from 'three';
import CreateGrid from './create-grid';

const TerrainMesh = ({ position = [0, 0, 0] }) => {
    const meshRef = useRef();
    const geomRef = useRef();

    let currentOffset = 0;

    const width = 100, height = 100, widthSegments = 75, heightSegments = 75;

    useFrame(() => {
        if (geomRef.current) {
            currentOffset -= 0.001;
            const { vertices } = CreateGrid(width, height, widthSegments, heightSegments, currentOffset);
            geomRef.current.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <planeGeometry ref={geomRef} attach="geometry" args={[width, height, widthSegments, heightSegments]} />
            <meshBasicMaterial attach="material" color="green" wireframe side={DoubleSide} />
        </mesh>
    );
}

export default TerrainMesh;
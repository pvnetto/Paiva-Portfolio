import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, TriangleStripDrawMode, Float32BufferAttribute } from 'three';
import CreateGrid from './create-grid';

const TerrainMesh = () => {
    const meshRef = useRef();
    const geomRef = useRef();

    let currentOffset = 0;

    const width = 100, height = 100, widthSegments = 50, heightSegments = 50;

    useFrame(() => {
        if (geomRef.current) {
            currentOffset -= 0.001;
            const { vertices } = CreateGrid(51, 51, currentOffset);
            geomRef.current.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        }
    })

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <planeBufferGeometry ref={geomRef} attach="geometry" args={[100, 100, 50, 50]} />
            <meshBasicMaterial attach="material" color="green" wireframe side={DoubleSide} />
        </mesh>
    );
}

export default TerrainMesh;
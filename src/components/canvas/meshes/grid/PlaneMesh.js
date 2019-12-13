import React, { useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, TriangleStripDrawMode, Float32BufferAttribute } from 'three';
import CreateGrid from './create-grid';

const PlaneMesh = () => {
    const meshRef = useRef();
    const geomRef = useRef();

    let planeVertices = [];
    const planeFaces = [];
    let currentOffset = 0;

    useFrame(() => {
        if (geomRef.current) {
            currentOffset -= 0.001;
            const { vertices } = CreateGrid(currentOffset);

            planeVertices = [];
            for (let i = 0; i < vertices.length; i++) {
                const currentVertex = vertices[i];
                planeVertices.push(currentVertex.x, currentVertex.y, currentVertex.z);
            }

            geomRef.current.setAttribute('position', new Float32BufferAttribute(planeVertices, 3));
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} drawMode={TriangleStripDrawMode}>
            <bufferGeometry ref={geomRef} faces={planeFaces} attach="geometry" />
            <meshBasicMaterial attach="material" color="green" wireframe side={DoubleSide} />
        </mesh>
    );
}

export default PlaneMesh;
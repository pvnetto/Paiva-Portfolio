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
            currentOffset -= 0.01;
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
        <mesh ref={meshRef}
            position={[0, 0, 0]} drawMode={TriangleStripDrawMode}
        // onClick={e => console.log('click')} onPointerOver={e => console.log('hover')} onPointerOut={e => console.log('unhover')}
        >

            <bufferGeometry ref={geomRef} faces={planeFaces} attach="geometry" />
            {/* <planeBufferGeometry ref={planeRef} attach="geometry" args={scale} /> */}
            <meshBasicMaterial attach="material" color="hotpink" wireframe side={DoubleSide} />
        </mesh>
    );
}

export default PlaneMesh;
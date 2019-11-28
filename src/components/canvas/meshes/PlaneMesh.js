import React, { useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { DoubleSide, Vector3, TriangleStripDrawMode, Float32BufferAttribute } from 'three';
import CreateGrid from './create-grid';

const PlaneMesh = () => {
    const meshRef = useRef();
    const geomRef = useRef();

    const planeVertices = [];
    const planeFaces = [];

    useEffect(() => {
        if (geomRef.current) {
            const { vertices, faces } = CreateGrid();

            for (let i = 0; i < vertices.length; i++) {
                const currentVertex = vertices[i];
                planeVertices.push(currentVertex.x, currentVertex.y, currentVertex.z);
            }

            geomRef.current.setAttribute('position', new Float32BufferAttribute(planeVertices, 3));
        }

    }, [geomRef.current]);

    return (
        <mesh ref={meshRef}
            position={[0, 0, 0]} rotation={[90, 0, 0]} drawMode={TriangleStripDrawMode}
            onClick={e => console.log('click')} onPointerOver={e => console.log('hover')} onPointerOut={e => console.log('unhover')}
        >

            <bufferGeometry ref={geomRef} vertices={planeVertices} faces={planeFaces} attach="geometry" />
            {/* <planeBufferGeometry ref={planeRef} attach="geometry" args={scale} /> */}
            <meshBasicMaterial attach="material" wireframe side={DoubleSide} />
        </mesh>
    );
}

export default PlaneMesh;
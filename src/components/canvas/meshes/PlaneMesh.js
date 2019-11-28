import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const PlaneMesh = () => {
    const meshRef = useRef();
    // useFrame(() => {
    //     meshRef.current.rotation.x += 0.01;
    //     meshRef.current.rotation.y += 0.01;
    // });

    const scale = [60, 30, 30];

    return (
        <mesh ref={meshRef}
            position={[0, 0, 0]} rotation={[90, 0, 0]}
            onClick={e => console.log('click')} onPointerOver={e => console.log('hover')} onPointerOut={e => console.log('unhover')}
        >
            {/* args: passes values to the object's constructor on Three.JS
                attach: The value passed to attach is the name of the property in mesh that this component belongs to.
                    - EX: attach="geometry" means mesh.props.geometry will receive this component as its value */}
            <planeBufferGeometry attach="geometry" args={scale} />
            <meshBasicMaterial attach="material" wireframe />
        </mesh>
    );
}

export default PlaneMesh;
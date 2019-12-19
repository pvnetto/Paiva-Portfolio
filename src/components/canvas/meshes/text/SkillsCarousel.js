import React, { useRef } from 'react';
import { Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';

import useResponsivePos from '../useResponsivePos';
import Text from './text';

const SkillsCarousel = () => {
    const skillsRef = [];

    const startCenter = new Vector3(8, -41, -18);
    const endCenter = new Vector3(1, -41, -22);
    const center = useResponsivePos(startCenter, endCenter);

    const fontSize = 0.8;

    const animationRadius = 3;
    const animationSpeed = 0.5;
    const offsetStrength = 2;
    let animationT = 0;

    const addRef = (ref) => {
        skillsRef.push(ref);
        return true;
    }

    useFrame((state, delta) => {
        if (skillsRef.length > 0) {
            animationT += delta * animationSpeed;

            skillsRef.forEach((skillRef, idx) => {
                const startT = animationSpeed * idx * offsetStrength;

                const sinVal = Math.sin(animationT + startT) * animationRadius;
                const cosVal = Math.cos(animationT + startT) * animationRadius;
                const currentDisplacement = new Vector3(cosVal, sinVal, cosVal * sinVal);
                const currentPos = new Vector3(center.x, center.y, center.z).add(currentDisplacement);
                skillRef.position.set(currentPos.x, currentPos.y, currentPos.z);
            });
        }
    });

    return (
        <>
            <Text addRef={addRef} color="green" size={fontSize} position={[15, -40, -15]} children="REACT" />
            <Text addRef={addRef} color="green" size={fontSize} position={[8, -35, -15]} children="REDUX" />
            <Text addRef={addRef} color="green" size={fontSize} position={[8, -40, -15]} children="SCSS" />
            <Text addRef={addRef} color="green" size={fontSize} position={[8, -40, -15]} children="THREEJS" />
            <Text addRef={addRef} color="green" size={fontSize} position={[8, -40, -15]} children="WEBPACK" />
            <Text addRef={addRef} color="green" size={fontSize} position={[1, -40, -15]} children="UNREAL" />
            <Text addRef={addRef} color="green" size={fontSize} position={[8, -45, -15]} children="UNITY" />
        </>
    );
}

export default SkillsCarousel;
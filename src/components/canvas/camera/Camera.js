import React, { useState, useEffect } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import { Euler, Vector3, Quaternion } from 'three';

const Camera = () => {
    const { camera, scene, gl } = useThree();

    const initialRot = new Euler(0.23, 0, 0);

    const [startPos, setStartPos] = useState(new Vector3(0, 3, 0));
    const [targetPos, setTargetPos] = useState(null);

    const [startRot, setStartRot] = useState(null);
    const [targetRot, setTargetRot] = useState(null);

    const animationDuration = 1;
    let animationTime = 0;

    // The camera's start position equals its initial target position
    useEffect(() => {
        camera.near = 7.2;

        camera.position.set(startPos.x, startPos.y, startPos.z);
        camera.setRotationFromQuaternion(initialRot);

        const startRotQuat = new Quaternion().setFromEuler(initialRot);
        setStartRot(startRotQuat);

        const targetRotQuat = new Quaternion().setFromEuler(initialRot);
        setTargetRot(targetRotQuat);
        setTargetPos(new Vector3(startPos.x, startPos.y, startPos.z));

        // Forces camera to update the near plane
        camera.updateProjectionMatrix();
    }, []);

    useFrame((state, delta) => {
        animationTime += delta;
        let animationT = animationTime / animationDuration;
        animationT = Math.min(animationT, 1.0);

        camera.position.lerpVectors(startPos, targetPos, animationT);

        const currentRot = new Quaternion();
        Quaternion.slerp(startRot, targetRot, currentRot, animationT);
        camera.setRotationFromQuaternion(currentRot);
    });

    return <></>
}

export default Camera;
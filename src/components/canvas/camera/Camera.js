import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useThree, useFrame } from 'react-three-fiber';
import { Euler, Vector3, Quaternion } from 'three';

import Scenes from '../../scenes/Scenes';

const CameraRigs = (scene) => {
    switch (scene) {
        case Scenes.HOME: return {
            pos: new Vector3(0, 3, 0),
            rot: new Quaternion().setFromEuler(new Euler(0.23, 0, 0))
        }
        case Scenes.ABOUT: return {
            pos: new Vector3(0, -20, 0),
            rot: new Quaternion().setFromEuler(new Euler(0, 0, 0))
        }
        case Scenes.SKILLS: return {
            pos: new Vector3(0, -40, 0),
            rot: new Quaternion().setFromEuler(new Euler(0, 0, 0))
        }
        case Scenes.PROJECTS: return {
            pos: new Vector3(0, -60, 0),
            rot: new Quaternion().setFromEuler(new Euler(0, 0, 0))
        }
        case Scenes.CONTACT: return {
            pos: new Vector3(0, -90, 0),
            rot: new Quaternion().setFromEuler(new Euler(0.23, 0, 0))
        }
    }
}

const Camera = ({ currentScene }) => {
    const { camera } = useThree();

    const [startPos, setStartPos] = useState(null);
    const [targetPos, setTargetPos] = useState(null);

    const [startRot, setStartRot] = useState(null);
    const [targetRot, setTargetRot] = useState(null);

    const animationDuration = 0.8;
    let animationTime = 0;

    // The camera's start position equals its initial target position
    useEffect(() => {
        camera.near = 2;
        camera.updateProjectionMatrix();    // Forces camera to update the near plane
    }, []);

    useEffect(() => {
        const currentRig = CameraRigs(currentScene);

        setStartPos(targetPos || currentRig.pos);
        setStartRot(targetRot || currentRig.rot);

        setTargetPos(currentRig.pos);
        setTargetRot(currentRig.rot);
    }, [currentScene])

    useFrame((state, delta) => {
        if (animationTime < animationDuration) {
            animationTime += delta;
            let animationT = animationTime / animationDuration;
            animationT = Math.min(animationT, 1.0);

            const newPos = new Vector3(camera.position.x, camera.position.y, camera.position.z).lerpVectors(startPos, targetPos, animationT);
            camera.position.set(newPos.x, newPos.y, newPos.z);

            const currentRot = new Quaternion();
            Quaternion.slerp(startRot, targetRot, currentRot, animationT);
            camera.setRotationFromQuaternion(currentRot);
        }
        else {
            // Handles the case where re-rendering the Camera component would reset the animation
            if (targetPos !== startPos) {
                setStartPos(targetPos);
                setStartRot(targetRot);
            }
        }
    });

    return <></>
}

Camera.propTypes = {
    currentScene: PropTypes.oneOf(Object.values(Scenes)).isRequired,
}

export default Camera;
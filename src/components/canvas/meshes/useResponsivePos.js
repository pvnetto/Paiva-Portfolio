import React, { useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const clamp = (value, min, max) => {
    if (value > max) return max;
    if (value < min) return min;
    return value;
}

const useResponsivePos = (startPos, endPos) => {
    const { size } = useThree();

    // Responsive obj pos parameters
    const [centerPos, setCenterPos] = useState(new Vector3(0, 0, 0));
    const maxSize = 1920;
    const minSize = 480;
    const sizeRange = maxSize - minSize;

    useEffect(() => {
        // Gets responsive obj pos
        const width = clamp(size.width, minSize, maxSize);
        const t = (maxSize - width) / sizeRange;
        const newCenterPos = new Vector3(0, 0, 0).lerpVectors(startPos, endPos, t);

        setCenterPos(newCenterPos);
    }, [size]);

    return centerPos;
};

export default useResponsivePos;
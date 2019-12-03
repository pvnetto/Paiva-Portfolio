import React, { Suspense } from 'react';

import PlaneTexture from './PlaneTexture';
import SphereMesh from '../SphereMesh';
import unityLogo from '../../../../public/images/unity_logo.png';

const UnityLogo = () => {
    return (
        <Suspense fallback={<SphereMesh />}>
            <PlaneTexture textureURL={unityLogo} order={0} />
        </Suspense>
    );
}

export default UnityLogo;
import React, { Suspense } from 'react';

import PlaneTexture from './PlaneTexture';
import SphereMesh from '../SphereMesh';
import reactLogo from '../../../../public/images/react_logo.png';

const ReactLogo = () => {
    return (
        <Suspense fallback={<SphereMesh />}>
            <PlaneTexture textureURL={reactLogo} order={4} />
        </Suspense>
    );
}

export default ReactLogo;
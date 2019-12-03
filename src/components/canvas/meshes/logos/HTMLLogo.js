import React, { Suspense } from 'react';

import PlaneTexture from './PlaneTexture';
import SphereMesh from '../SphereMesh';
import htmlLogo from '../../../../public/images/html_logo.png';

const HTMLLogo = () => {
    return (
        <Suspense fallback={<SphereMesh />}>
            <PlaneTexture textureURL={htmlLogo} order={2} />
        </Suspense>
    );
}

export default HTMLLogo;
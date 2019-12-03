import React, { Suspense } from 'react';

import PlaneTexture from './PlaneTexture';
import SphereMesh from '../SphereMesh';
import cssLogo from '../../../../public/images/css3_logo.png';

const CSSLogo = () => {
    return (
        <Suspense fallback={<SphereMesh />}>
            <PlaneTexture position={[10, -45, -15]} textureURL={cssLogo} order={1} />
        </Suspense>
    );
}

export default CSSLogo;
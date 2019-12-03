import React, { Suspense } from 'react';

import PlaneTexture from './PlaneTexture';
import SphereMesh from '../SphereMesh';
import jsLogo from '../../../../public/images/js_logo.svg';

const JSLogo = () => {
    return (
        <Suspense fallback={<SphereMesh />}>
            <PlaneTexture position={[15, -35, -15]} textureURL={jsLogo} order={3} />
        </Suspense>
    );
}

export default JSLogo;
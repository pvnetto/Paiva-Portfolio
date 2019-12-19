import React from 'react';

import AppRoutes from './components/routes/AppRoutes';
import { SceneProvider } from './components/scenes/SceneContext';
import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav';

const App = () => {

    return (
        <SceneProvider >
            <Sidenav />
            <AppRoutes />
            <PageCanvas />
        </SceneProvider>
    );
};

export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav';
import AppRoutes from './components/routes/AppRoutes';
import { SceneProvider } from './components/scenes/SceneContext';

const App = () => {
    return (
        <SceneProvider >
            <BrowserRouter>
                <Sidenav />
                <AppRoutes />
                <PageCanvas />
            </ BrowserRouter>
        </SceneProvider>
    );
};

export default App;
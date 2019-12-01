import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav';
import AppRoutes from './components/routes/AppRoutes';

const App = () => {
    return (
        <BrowserRouter>
            <Sidenav />
            <AppRoutes />
            <PageCanvas />
        </ BrowserRouter>
    );
};

export default App;
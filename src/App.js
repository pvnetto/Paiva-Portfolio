import React from 'react';
import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav/Sidenav';
import Home from './components/home/Home';

const App = () => {
    return (
        <>
            <Sidenav />
            <Home />
            <PageCanvas />
        </>
    );
};

export default App;
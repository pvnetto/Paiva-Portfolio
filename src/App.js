import React from 'react';
import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav/Sidenav';
import Home from './components/home';
import About from './components/about/About';

const App = () => {
    return (
        <>
            <Sidenav />
            <Home />
            {/* <About /> */}
            <PageCanvas />
        </>
    );
};

export default App;
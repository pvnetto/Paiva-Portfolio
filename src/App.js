import React from 'react';
import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav/Sidenav';

const App = () => {
    return (
        <>
            <Sidenav />
            <PageCanvas />
        </>
    );
};

export default App;
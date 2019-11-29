import React from 'react';
import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

const App = () => {
    return (
        <>
            <Sidenav />
            {/* <Home /> */}
            {/* <About /> */}
            {/* <Skills /> */}
            {/* <Projects /> */}
            <Contact />
            <PageCanvas />
        </>
    );
};

export default App;
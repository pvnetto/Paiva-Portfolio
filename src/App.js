import React from 'react';
import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import ProjectInfo from './components/projects/info/ProjectInfo';

const App = () => {
    return (
        <>
            <Sidenav />
            {/* <Home /> */}
            {/* <About /> */}
            {/* <Skills /> */}
            {/* <Projects /> */}
            <ProjectInfo />
            {/* <Contact /> */}
            <PageCanvas />
        </>
    );
};

export default App;
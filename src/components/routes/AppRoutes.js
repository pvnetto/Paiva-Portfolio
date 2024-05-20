import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Skills from '../pages/skills';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </ >
    );
};

export default AppRoutes;
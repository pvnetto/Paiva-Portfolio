import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Skills from '../pages/skills';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

const AppRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </ >
    );
};

export default AppRoutes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Skills from '../skills';
import Projects from '../projects';
import Contact from '../contact';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    );
};

export default AppRoutes;
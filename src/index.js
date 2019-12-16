import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.module.css';

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
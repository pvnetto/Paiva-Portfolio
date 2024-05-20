import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.module.css';

const AppWrapper = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<App/>} />
            </Routes>
        </Router>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<AppWrapper />)
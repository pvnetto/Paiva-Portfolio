import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './global.module.css';

const router = createHashRouter([
    {
      path: "/*",
      element: <App />,
    }
]);

const AppWrapper = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<AppWrapper />)
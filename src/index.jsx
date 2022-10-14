import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routers from 'routers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routers);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

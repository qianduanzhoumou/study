import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';

const routers = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/ceshi',
        element: <Home />
    }
];

export default routers;

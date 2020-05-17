import React from 'react';
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/DashBoard';
import ListBlogs from '../pages/ListBlogs';
import Login from '../pages/Login/index';
import BlogDetail from '../pages/BlogDetail';

const ROUTES = [
    {
        path: '/',
        exact: true,
        render: () => <HomePage />
    },
    {
        path: '/dashboard',
        exact: false,
        render: () => <Dashboard />
    },
    {
        path: '/listblogs',
        exact: false,
        render: () => <ListBlogs />
    },
    {
        path: '/blog/:id',
        exact: false,
        render: () => <BlogDetail />
    },
    {
        path: '/login',
        exact: false,
        render: () => <Login />
    }
]

export default ROUTES;

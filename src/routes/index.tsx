import React from 'react';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import DefaultLayout from '~/layouts';
import BackgroundLayout from '~/layouts/BackgroundLayout';
import { Navigate, type RouteObject } from 'react-router-dom';
import AxiosContext from '~/contexts/AxiosContext';
import Demo from '~/pages/Demo';
import { demoRoute } from '~/pages/Demo/demoRoute';
import Profile from '~/pages/Profile';
import ForgetPassword from '~/pages/ForgetPassword';
import ResetPassword from '~/pages/ResetPassword';
import ChangePassword from '~/pages/ChangePassword';
import AuthGuardContext from '~/contexts/AuthGuardContext';
import GuestGuardContext from '~/contexts/GuestGuardContext';
import NotFound from '~/pages/NotFound';

const publicRoutes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/demo',
        element: <Demo />,
        children: demoRoute,
      },
      {
        index: true,
        element: <Navigate to="/explore" />,
      },
    ],
  },
  {
    element: <BackgroundLayout />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/change-password',
        element: <ChangePassword />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/forgot-password',
        element: <ForgetPassword />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    index: true,
    element: <Navigate to="/home" />,
  },
];

export default publicRoutes;

import React from 'react';

import { Navigate, type RouteObject } from 'react-router-dom';

import AuthGuardContext from '~/contexts/AuthGuardContext';
import AxiosContext from '~/contexts/AxiosContext';
import GuestGuardContext from '~/contexts/GuestGuardContext';
import DefaultLayout from '~/layouts';
import BackgroundLayout from '~/layouts/BackgroundLayout';
import ChangePassword from '~/pages/ChangePassword';
import Demo from '~/pages/Demo';
import { demoRoute } from '~/pages/Demo/demoRoute';
import ForgetPassword from '~/pages/ForgetPassword';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Profile from '~/pages/Profile';
import Register from '~/pages/Register';
import ResetPassword from '~/pages/ResetPassword';

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

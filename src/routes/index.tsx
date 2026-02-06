import React, { lazy } from 'react';

import { Navigate, type RouteObject } from 'react-router-dom';

import AuthGuardContext from '~/contexts/AuthGuardContext';
import AxiosContext from '~/contexts/AxiosContext';
import GuestGuardContext from '~/contexts/GuestGuardContext';
import { demoRoute } from '~/pages/Demo/demoRoute';
const DefaultLayout = lazy(() => import('~/layouts'));
const BackgroundLayout = lazy(() => import('~/layouts/BackgroundLayout'));
const ChangePassword = lazy(() => import('~/pages/ChangePassword'));
const Demo = lazy(() => import('~/pages/Demo'));
const ForgetPassword = lazy(() => import('~/pages/ForgetPassword'));
const Home = lazy(() => import('~/pages/Home'));
const Login = lazy(() => import('~/pages/Login'));
const NotFound = lazy(() => import('~/pages/NotFound'));
const Profile = lazy(() => import('~/pages/Profile'));
const Register = lazy(() => import('~/pages/Register'));
const ResetPassword = lazy(() => import('~/pages/ResetPassword'));

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

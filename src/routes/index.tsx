import React, { lazy } from 'react';

import { Navigate, type RouteObject } from 'react-router-dom';

import AuthGuardContext from '~/contexts/AuthGuardContext';
import AxiosContext from '~/contexts/AxiosContext';
import GuestGuardContext from '~/contexts/GuestGuardContext';
import AboutUs from '~/pages/AboutUs';
import { demoRoute } from '~/pages/Demo/demoRoute';
import ErrorFallback from '~/pages/ErrorFallback';

const DefaultLayout = lazy(() => import('~/layouts/DefaultLayout'));
const BackgroundLayout = lazy(() => import('~/layouts/BackgroundLayout'));

const Lockscreen = lazy(() => import('~/pages/Lockscreen'));
const ChangePassword = lazy(() => import('~/pages/ChangePassword'));
const Demo = lazy(() => import('~/pages/Demo'));
const ForgetPassword = lazy(() => import('~/pages/ForgetPassword'));
const Home = lazy(() => import('~/pages/Home'));
const Login = lazy(() => import('~/pages/Login'));
const NotFound = lazy(() => import('~/pages/ErrorFallback'));
const Profile = lazy(() => import('~/pages/Profile'));
const Register = lazy(() => import('~/pages/Register'));
const ResetPassword = lazy(() => import('~/pages/ResetPassword'));
const UnderConstruction = lazy(() => import('~/pages/UnderConstruction'));
const Dashboard1 = lazy(() => import('~/pages/Home'));
// Apps
const Calendar = lazy(() => import('~/pages/Apps/Calendar'));
const Gallery = lazy(() => import('~/pages/Apps/Gallery'));
const FileManager = lazy(() => import('~/pages/Apps/FileManager'));
// Elements
const ButtonPage = lazy(() => import('~/pages/Elements/ButtonPage'));
const ChipPage = lazy(() => import('~/pages/Elements/ChipPage'));
const TypographyPage = lazy(() => import('~/pages/Elements/TypographyPage'));
const AlertPage = lazy(() => import('~/pages/Elements/AlertPage'));

const publicRoutes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/dashboard/dashboard-1',
        element: <Dashboard1 />,
      },
      {
        path: '/demo',
        element: <Demo />,
        children: demoRoute,
      },
      {
        path: '/pages/about-us',
        element: <AboutUs />,
      },
      {
        path: '/pages/profile',
        element: <Profile />,
      },
      {
        path: '/pages/apps',
        children: [
          {
            path: 'calendar',
            element: <Calendar />,
          },
          {
            path: 'gallery',
            element: <Gallery />,
          },
          {
            path: 'file-manager',
            element: <FileManager />,
          },
        ],
      },
      {
        path: '/pages/elements',
        children: [
          {
            path: 'alerts',
            element: <AlertPage />,
          },
          {
            path: 'buttons',
            element: <ButtonPage />,
          },
          {
            path: 'chips',
            element: <ChipPage />,
          },
          {
            path: 'typography',
            element: <TypographyPage />,
          },
        ],
      },
    ],
  },
  {
    element: <BackgroundLayout responsive />,
    children: [
      {
        path: '/pages/sign-in',
        element: <Login />,
      },
      {
        path: '/pages/sign-up',
        element: <Register />,
      },
      {
        path: '/pages/forgot-password',
        element: <ForgetPassword />,
      },
      {
        path: '/pages/reset-password',
        element: <ResetPassword />,
      },
      {
        path: '/pages/lockscreen',
        element: <Lockscreen />,
      },
      {
        path: '/pages/under-construction',
        element: <UnderConstruction />,
      },
    ],
  },
  {
    element: <BackgroundLayout />,
    children: [
      {
        path: '/pages/404-error',
        element: <ErrorFallback code={404} />,
      },
      {
        path: '/pages/500-error',
        element: <ErrorFallback code={500} />,
      },
      {
        path: '/pages/501-error',
        element: <ErrorFallback code={501} />,
      },
      {
        path: '*',
        element: <ErrorFallback code={404} />,
      },
    ],
  },
  {
    index: true,
    element: <Navigate to="/home" />,
  },
];

export default publicRoutes;

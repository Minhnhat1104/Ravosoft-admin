import React, { lazy } from 'react';

import { Navigate, type RouteObject } from 'react-router-dom';

import AuthGuardContext from '~/contexts/AuthGuardContext';
import AxiosContext from '~/contexts/AxiosContext';
import GuestGuardContext from '~/contexts/GuestGuardContext';
import AboutUs from '~/pages/AboutUs';
import { demoRoute } from '~/pages/Demo/demoRoute';

const DefaultLayout = lazy(() => import('~/layouts/DefaultLayout'));
const BackgroundLayout = lazy(() => import('~/layouts/BackgroundLayout'));

const Lockscreen = lazy(() => import('~/pages/Authentication/Lockscreen'));
const ChangePassword = lazy(() => import('~/pages/Authentication/ChangePassword'));
const Demo = lazy(() => import('~/pages/Demo'));
const ForgetPassword = lazy(() => import('~/pages/Authentication/ForgetPassword'));
const Login = lazy(() => import('~/pages/Authentication/Login'));
const ErrorFallback = lazy(() => import('~/pages/Authentication/ErrorFallback'));
const Profile = lazy(() => import('~/pages/Profile'));
const Register = lazy(() => import('~/pages/Authentication/Register'));
const ResetPassword = lazy(() => import('~/pages/Authentication/ResetPassword'));
const UnderConstruction = lazy(() => import('~/pages/Authentication/UnderConstruction'));
const Dashboard1 = lazy(() => import('~/pages/Dashboard1'));
// Apps
const Calendar = lazy(() => import('~/pages/Apps/Calendar'));
const Gallery = lazy(() => import('~/pages/Apps/Gallery'));
const FileManager = lazy(() => import('~/pages/Apps/FileManager'));
// Elements
const ButtonPage = lazy(() => import('~/pages/Elements/ButtonPage'));
const ChipPage = lazy(() => import('~/pages/Elements/ChipPage'));
const TypographyPage = lazy(() => import('~/pages/Elements/TypographyPage'));
const AlertPage = lazy(() => import('~/pages/Elements/AlertPage'));
const TablePage = lazy(() => import('~/pages/Elements/TablePage'));
const PaginationPage = lazy(() => import('~/pages/Elements/PaginationPage'));
// Forms
const InputPage = lazy(() => import('~/pages/Forms/InputPage'));
const SliderPage = lazy(() => import('~/pages/Forms/SliderPage'));
const CheckboxPage = lazy(() => import('~/pages/Forms/CheckboxPage'));
const RadioPage = lazy(() => import('~/pages/Forms/RadioPage'));
const SelectPage = lazy(() => import('~/pages/Forms/SelectPage'));
const FileUploadPage = lazy(() => import('~/pages/Forms/FileUploadPage'));

const publicRoutes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
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
        path: '/pages/forms',
        children: [
          {
            path: 'input',
            element: <InputPage />,
          },
          {
            path: 'checkbox',
            element: <CheckboxPage />,
          },
          {
            path: 'radio',
            element: <RadioPage />,
          },
          {
            path: 'select',
            element: <SelectPage />,
          },
          {
            path: 'range-slider',
            element: <SliderPage />,
          },
          {
            path: 'file-upload',
            element: <FileUploadPage />,
          },
          {
            path: 'date-time-picker',
            element: <></>,
          },
          {
            path: 'color-picker',
            element: <></>,
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
          {
            path: 'table',
            element: <TablePage />,
          },
          {
            path: 'pagination',
            element: <PaginationPage />,
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
    element: <Navigate to="/dashboard/dashboard-1" />,
  },
];

export default publicRoutes;

import { TextField } from '@mui/material';

import CheckboxGroup from '~/components/CheckboxGroup';
import { WriteField } from '~/types';

import { notificationOptions, verificationOptions } from './constants';

export const nameFields: WriteField[] = [
  {
    label: 'User Name',
    keyName: 'user_name',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'Mack Adamia',
  },
  {
    label: 'First Name',
    keyName: 'first_name',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'Mack Adamia',
  },
  {
    label: 'last Name',
    keyName: 'last_name',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'Mack Adamia',
  },
  {
    label: 'Nick Name',
    keyName: 'nick_name',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'Nowa',
  },
  {
    label: 'Verification',
    keyName: 'verification',
    component: CheckboxGroup,
    componentProps: {
      options: verificationOptions,
    },
    defaultValue: [],
  },
];

export const notificationFields: WriteField[] = [
  {
    label: 'Configure Notifications',
    keyName: 'configure_notifications',
    component: CheckboxGroup,
    componentProps: {
      options: notificationOptions,
    },
    defaultValue: [notificationOptions[0], notificationOptions[2]],
  },
];

import { TextField } from '@mui/material';

import { WriteField } from '~/types';

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
    label: 'Designation',
    keyName: 'designation',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'Web Designer',
  },
];

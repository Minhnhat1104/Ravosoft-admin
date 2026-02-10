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

export const contactFields: WriteField[] = [
  {
    label: 'Email(required)',
    keyName: 'email',
    component: TextField,
    componentProps: {
      type: 'email',
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'info@Nowa.in',
  },
  {
    label: 'Website',
    keyName: 'website',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: '@spruko.w',
  },
  {
    label: 'Phone',
    keyName: 'phone',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: '+245 354 654',
  },
  {
    label: 'Address',
    keyName: 'address',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
      multiline: true,
      minRows: 2,
    },
    defaultValue: 'San Francisco, CA',
  },
];

export const socialFields: WriteField[] = [
  {
    label: 'Twitter',
    keyName: 'twitter',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'twitter.com/spruko.me',
  },
  {
    label: 'Facebook',
    keyName: 'facebook',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: '#!Nowa',
  },
  {
    label: 'Google+',
    keyName: 'google_plus',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'spruko.com',
  },
  {
    label: 'Linked in',
    keyName: 'linked_in',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'linkedin.com/in/spruko',
  },
  {
    label: 'Github',
    keyName: 'github',
    component: TextField,
    componentProps: {
      fullWidth: true,
      size: 'small',
    },
    defaultValue: 'github.com/sprukos',
  },
];

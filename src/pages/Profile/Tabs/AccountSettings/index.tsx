import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import WriteFields from '../WriteFields';

import { nameFields, notificationFields } from './config';

const AccountSettings = () => {
  return (
    <CustomCard sx={{ p: 2.5 }}>
      <WriteFields fields={nameFields} label="Personal Information" />
      <WriteFields fields={notificationFields} label="Notifications" sx={{ mt: 2 }} />
    </CustomCard>
  );
};

export default AccountSettings;

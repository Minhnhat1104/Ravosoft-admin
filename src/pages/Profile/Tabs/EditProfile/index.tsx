import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import { contactFields, nameFields, socialFields } from './config';
import WriteFields from './WriteFields';

const EditProfile = () => {
  return (
    <CustomCard sx={{ p: 2.5 }}>
      <WriteFields fields={nameFields} label="Personal Information" />
      <WriteFields fields={contactFields} label="Contact Info" sx={{ mt: 2 }} />
      <WriteFields fields={socialFields} label="Social Info" sx={{ mt: 2 }} />
    </CustomCard>
  );
};

export default EditProfile;

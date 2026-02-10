import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import { nameFields } from './config';

const EditProfile = () => {
  return (
    <CustomCard sx={{ p: 2.5 }}>
      <Typography sx={{ fontWeight: 600, mb: 3 }}>Personal Information</Typography>
      <Grid container spacing={2}>
        {nameFields?.map((_field) => (
          <React.Fragment key={_field?.keyName}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography color="text.secondary" sx={{ fontWeight: 500, mt: 0.75 }}>
                {_field?.label}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <_field.component {..._field?.componentProps} defaultValue={_field?.defaultValue} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </CustomCard>
  );
};

export default EditProfile;

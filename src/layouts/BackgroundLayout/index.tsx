import React from 'react';

import { Box, Grid, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import background from '~/assets/img/img.jpg';

import Header from '../Header';

function BackgroundLayout({ children }: any) {
  const theme = useTheme();
  return (
    <>
      <Grid container height={'100vh'} sx={{ background: theme.palette.primary.main }}>
        <Grid size="grow" />
        <Grid
          size={{ xs: 10, sm: 8, md: 6, lg: 4, xl: 3 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </Grid>
        <Grid size="grow" />
      </Grid>
    </>
  );
}

export default BackgroundLayout;

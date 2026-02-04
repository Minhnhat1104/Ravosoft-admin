import React from 'react';

import { Box, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import background from '~/assets/img/img.jpg';

import Header from '../Header';


function BackgroundLayout({ children }: any) {
  const theme = useTheme();
  return (
    <Stack
      height={'100vh'}
      sx={{ background: theme.palette.background.paper, transition: 'background 0.3s ease-in-out' }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          width: 1,
          background: theme.palette.primary.main,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
}

export default BackgroundLayout;

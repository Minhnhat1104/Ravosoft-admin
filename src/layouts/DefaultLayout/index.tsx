import React from 'react';

import { Box, Container, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

function DefaultLayout() {
  const theme = useTheme();
  return (
    <Stack
      height={'100vh'}
      sx={{ background: theme.palette.background.paper, transition: 'background 0.3s ease-in-out' }}
    >
      <Header isLogin />

      <Stack
        sx={{
          flex: 1,
          minHeight: 0,
          py: 2,
          overflowY: 'auto',
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </Stack>
    </Stack>
  );
}

export default DefaultLayout;

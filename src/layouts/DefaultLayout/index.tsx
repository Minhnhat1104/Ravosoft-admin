import React from 'react';

import { Box, Container, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Sidebar from '../SideBar';

function DefaultLayout() {
  const theme = useTheme();
  return (
    <Stack
      height={'100vh'}
      direction="row"
      sx={{ background: theme.palette.background.paper, transition: 'background 0.3s ease-in-out' }}
    >
      <Stack sx={{ height: 1, width: 240, borderRight: theme.border.light }}>
        <Sidebar />
      </Stack>
      <Stack sx={{ height: 1, flex: 1, minWidth: 0 }}>
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
    </Stack>
  );
}

export default DefaultLayout;

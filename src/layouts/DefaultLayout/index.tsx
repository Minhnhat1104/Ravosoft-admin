import React from 'react';

import { Box, Container, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import SplitView from '~/components/SplitView';

import Header from '../Header';
import PageTitle from '../PageTitle';
import Sidebar from '../SideBar';

function DefaultLayout() {
  const theme = useTheme();
  return (
    <Stack
      height={'100vh'}
      direction="row"
      sx={{ background: theme.palette.background.paper, transition: 'background 0.3s ease-in-out' }}
    >
      <SplitView
        leftPane={<Sidebar />}
        rightPane={
          <Stack sx={{ height: 1, flex: 1, minWidth: 0 }}>
            <Header isLogin />

            <Stack
              sx={{
                flex: 1,
                minHeight: 0,
                overflowY: 'auto',
                background: theme.palette.background.softGrey,
              }}
            >
              <PageTitle />
              <Outlet />
            </Stack>
          </Stack>
        }
      />
    </Stack>
  );
}

export default DefaultLayout;

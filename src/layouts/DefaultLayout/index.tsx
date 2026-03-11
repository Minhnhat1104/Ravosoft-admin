import React, { Suspense } from 'react';

import { Box, Container, Stack, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import LoadingCircular from '~/components/LoadingCircular';
import SplitView from '~/components/SplitView';

import Header from '../Header';
import PageFooter from '../PageFooter';
import PageTitle from '../PageTitle';
import Sidebar from '../SideBar';

function DefaultLayout() {
  const theme = useTheme();
  return (
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
            <Suspense fallback={<LoadingCircular sx={{ flex: 1, minHeight: 0 }} />}>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Outlet />
              </Box>
            </Suspense>
            <PageFooter />
          </Stack>
        </Stack>
      }
    />
  );
}

export default DefaultLayout;

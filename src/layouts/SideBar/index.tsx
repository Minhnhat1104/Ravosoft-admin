import React from 'react';

import { Stack } from '@mui/material';

import Logo from './Logo';
import NestedList from './NestList';

const Sidebar = () => {
  return (
    <Stack
      sx={{
        height: 1,
      }}
    >
      <Logo />
      <NestedList sx={{ flex: 1, minHeight: 0 }} />
    </Stack>
  );
};

export default Sidebar;

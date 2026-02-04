import React from 'react';

import { Stack } from '@mui/material';

import Logo from './Logo';

const Sidebar = () => {
  return (
    <Stack
      sx={{
        height: 1,
      }}
    >
      <Logo />
    </Stack>
  );
};

export default Sidebar;

import React from 'react';

import { Stack, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/favicon.ico';
import { PAGE_TITLE } from '~/config/constants';

const Logo = () => {
  const theme = useTheme();
  return (
    <Stack
      component={Link}
      to="/"
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
      height={64}
      sx={{ borderBottom: theme.border.light, textDecoration: 'none !important' }}
    >
      {/* <img style={{ width: 40, height: 40 }} src={logo} alt="Logo" /> */}
      <Typography fontWeight="500" fontSize={24}>
        {PAGE_TITLE}
      </Typography>
    </Stack>
  );
};

export default Logo;

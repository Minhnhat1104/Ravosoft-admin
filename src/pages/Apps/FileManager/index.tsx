import React, { useState } from 'react';

import { AddIcCallOutlined, AddOutlined } from '@mui/icons-material';
import { Button, Divider, Grid, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import Left from './Left';
import MenuList, { menuItems } from './Left/MenuList';
import Storage from './Left/Storage';
import Right from './Right';

const FileManager = () => {
  return (
    <Grid container spacing={3} sx={{ p: 2, pt: 0 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Left />
      </Grid>

      <Grid size={{ xs: 12, md: 9 }}>
        <Right />
      </Grid>
    </Grid>
  );
};

export default FileManager;

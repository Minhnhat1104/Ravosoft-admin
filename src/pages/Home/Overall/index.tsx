import React from 'react';

import { GroupOutlined, InfoOutline, ShoppingCartOutlined, VerifiedUserOutlined } from '@mui/icons-material';
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';

import CustomerOverView from './CustomerOverView';
import Item from './Item';

interface OverallProps {}

const Overall = () => {
  const theme = useTheme();

  return (
    <Stack sx={{ border: theme.border.main, borderRadius: 2, width: 1, background: theme.palette.background.paper }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ borderBottom: theme.border.main, borderRadius: 1, width: 1, p: 2 }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            display: 'flex',
            background: theme.palette.primary.lighter,
            mr: 1,
            borderRadius: 2,
          }}
        >
          <InfoOutline sx={{ fontSize: 16, m: 'auto', color: theme.palette.primary.main }} />
        </Box>
        <Typography variant="h5" sx={{ fontSize: 18, fontWeight: 500 }}>
          Overall Information
        </Typography>
      </Stack>

      {/* Body */}
      <Stack>
        <Grid container spacing={2} p={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item label="Suppliers" value="6987" icon={VerifiedUserOutlined} iconColor="primary" />
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item label="Customer" value="4896" icon={GroupOutlined} iconColor="warning" />
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item label="Orders" value="487" icon={ShoppingCartOutlined} iconColor="success" />
          </Grid>
        </Grid>

        <CustomerOverView sx={{ mt: 2, borderTop: theme.border.main }} />
      </Stack>
    </Stack>
  );
};

export default Overall;

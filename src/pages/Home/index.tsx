import { CalendarMonth, InfoOutline } from '@mui/icons-material';
import { Alert, Button, Container, Grid, Paper, Stack, Typography, useTheme } from '@mui/material';
import React, { lazy } from 'react';
import PrimaryStats from './PrimaryStats';
import SecondaryStats from './SecondaryStats';
import SalesAndPurchase from './SalesAndPurchase';
import Overall from './Overall';
import TopSellingProducts from './TopSellingProducts';
import LowStockProducts from './LowStockProducts';

interface HomeProps {}

export const WIDGET_SPACING = 3;

function Home({}: HomeProps) {
  const theme = useTheme();
  return (
    <>
      {/* <Paper sx={{ width: 1, height: 1, p: 2 }}> */}
      <Stack direction="row" width={1} alignItems="center">
        <Stack>
          <Typography variant="h2" fontWeight={500}>
            Welcome, Admin
          </Typography>
          <Typography mt={0.5}>You have 200+ Orders, Today</Typography>
        </Stack>

        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<CalendarMonth />}
          sx={{ ml: 'auto', height: 'fit-content' }}
        >
          01/24/2026 - 01/30/2026
        </Button>
      </Stack>

      <Alert icon={<InfoOutline fontSize="inherit" />} severity="warning" sx={{ my: 2 }}>
        Your Product Apple Iphone 15 is running Low, already below 5 Pcs., Add Stock
      </Alert>

      <PrimaryStats />

      <SecondaryStats sx={{ my: 3 }} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <SalesAndPurchase />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Overall />
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TopSellingProducts />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <LowStockProducts />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>{/* <TopSellingProducts /> */}</Grid>
      </Grid>

      {/* </Paper> */}
    </>
  );
}

export default Home;

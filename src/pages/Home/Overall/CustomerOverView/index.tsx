import { CalendarMonth } from '@mui/icons-material';
import { Button, Divider, Grid, Stack, SxProps, Typography, useTheme } from '@mui/material';
import { Gauge } from '@mui/x-charts';
import React from 'react';
import Item from './Item';

interface CustomerOverViewProps {
  sx?: SxProps;
}

const CustomerOverView = ({ sx }: CustomerOverViewProps) => {
  const theme = useTheme();

  return (
    <Stack sx={{ p: 2, ...sx }}>
      <Stack direction="row" width={1} alignItems="center">
        <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 600 }}>
          Customers overview
        </Typography>

        <Button
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<CalendarMonth />}
          sx={{ ml: 'auto', height: 'fit-content' }}
        >
          Today
        </Button>
      </Stack>

      <Grid container mt={2}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Gauge width={120} height={120} value={50} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" sx={{ height: 100 }} />}>
            <Item label="First Time" value="5.5K" percent={25} color="error" sx={{ flex: 1 }} />
            <Item label="Return" value="3.5K" percent={21} color="success" sx={{ flex: 1 }} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CustomerOverView;

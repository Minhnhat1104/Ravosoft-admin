import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import ButtonGroupCustom from '~/components/ButtonGroupCustom';
import { LabelValue } from '~/types';
import Item from './Item';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
const rangeOptions: LabelValue[] = [
  {
    label: '1D',
    value: '1D',
  },
  {
    label: '1W',
    value: '1W',
  },
  {
    label: '1M',
    value: '1M',
  },
  {
    label: '3M',
    value: '3M',
  },
  {
    label: '6M',
    value: '6M',
  },
  {
    label: '1Y',
    value: '1Y',
  },
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];
const xLabels = [
  '2 am',
  '4 am',
  '6 am',
  '8 am',
  '10 am',
  '12 am',
  '14 pm',
  '16 pm',
  '18 pm',
  '20 pm',
  '22 pm',
  '24 pm',
];

const SalesAndPurchase = () => {
  const theme = useTheme();

  const [range, setRange] = useState(rangeOptions[4]);

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
            background: theme.palette.warning.lighter,
            mr: 1,
            borderRadius: 2,
          }}
        >
          <ShoppingCartOutlined sx={{ fontSize: 16, m: 'auto', color: theme.palette.warning.main }} />
        </Box>
        <Typography variant="h5" sx={{ fontSize: 18, fontWeight: 500 }}>
          Sales & Purchase
        </Typography>

        <ButtonGroupCustom options={rangeOptions} value={range} onChange={setRange} size="small" sx={{ ml: 'auto' }} />
      </Stack>
      {/* Body */}
      <Stack sx={{ p: 2 }}>
        <Stack direction="row" spacing={1}>
          <Item label="Total Purchase" value="3K" />
          <Item label="Total Sales" value="1K" />
        </Stack>

        <Box sx={{ width: '100%', height: 277, ml: -2, mb: -2 }}>
          <BarChart
            series={[
              { data: uData, label: 'Sales', id: 'uvId', stack: 'total', color: theme.palette.warning.main },
              { data: pData, label: 'Purchase', id: 'pvId', stack: 'total', color: theme.palette.warning.light },
            ]}
            xAxis={[{ data: xLabels, height: 28 }]}
            yAxis={[{ width: 50 }]}
            grid={{ horizontal: true }}
            borderRadius={10}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default SalesAndPurchase;

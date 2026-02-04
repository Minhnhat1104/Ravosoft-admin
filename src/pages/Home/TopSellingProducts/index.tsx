import React from 'react';

import { CalendarMonth, ShoppingCartOutlined, ViewInArOutlined } from '@mui/icons-material';
import { Box, Button, Divider, Stack, Typography, useTheme } from '@mui/material';

import Item, { TopSellItem } from './Item';

const items: TopSellItem[] = [
  {
    label: 'Charger Cable - Lighting',
    percent: 25,
    price: '187',
    sales: 247,
  },
  {
    label: 'Yves Saint Eau De Parfum',
    percent: 25,
    price: '145',
    sales: 289,
  },
  {
    label: 'Apple Airpods 2',
    percent: 25,
    price: '458',
    sales: 300,
  },
  {
    label: 'Vacuum Cleaner',
    percent: 25,
    price: '139',
    sales: 255,
  },
  {
    label: 'Samsung Galaxy S21 Fe 5g',
    percent: 25,
    price: '898',
    sales: 365,
  },
];

const TopSellingProducts = () => {
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
            background: theme.palette.warning.lighter,
            mr: 1,
            borderRadius: 2,
          }}
        >
          <ViewInArOutlined sx={{ fontSize: 16, m: 'auto', color: theme.palette.warning.main }} />
        </Box>
        <Typography variant="h5" sx={{ fontSize: 18, fontWeight: 500 }}>
          Top Selling Products
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
      {/* Body */}
      <Stack sx={{ width: 1 }} divider={<Divider sx={{ borderColor: theme.border.main }} />}>
        {items?.map((_item) => (
          <Item {..._item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default TopSellingProducts;

import { CalendarMonth, ShoppingCartOutlined, ViewInArOutlined } from '@mui/icons-material';
import { Box, Button, Divider, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import Item, { LowStockItem } from './Item';

const items: LowStockItem[] = [
  {
    label: 'Dell XPS 13',
    percent: 25,
    id: '665814',
    quantity: 8,
  },
  {
    label: 'Vacuum Cleaner Robot',
    percent: 25,
    id: '940004',
    quantity: 14,
  },
  {
    label: 'KitchenAid Stand Mixer',
    percent: 25,
    id: '325569',
    quantity: 21,
  },
  {
    label: "Levi's Trucker Jacket",
    percent: 25,
    id: '124588',
    quantity: 12,
  },
  {
    label: "Lay's Classic",
    percent: 25,
    id: '365586',
    quantity: 10,
  },
];

const LowStockProducts = () => {
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

        <Typography sx={{ textDecoration: 'underline', color: 'text.secondary', ml: 'auto' }}>View All</Typography>
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

export default LowStockProducts;

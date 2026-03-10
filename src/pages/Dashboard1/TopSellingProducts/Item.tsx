import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Stack, SxProps, Typography, useTheme } from '@mui/material';


import { PalleteColor } from '~/themes/types/theme';
import { formatPercent } from '~/tools';

import productImg from './product-01.webp';

export interface TopSellItem {
  label: string;
  percent: number;
  price: string;
  sales: number;
}

const Item = ({ label, price, percent, sales }: TopSellItem) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      sx={{
        width: 1,
        alignItems: 'center',
        p: 2,
      }}
    >
      <Box component="img" src={productImg} sx={{ width: 48, height: 48, mr: 1, borderRadius: 1 }} />
      <Stack sx={{ flex: 1, minWidth: 0 }}>
        <Typography className="ellipsis-text" sx={{ fontSize: 14, fontWeight: 500, mb: 0.25 }}>
          {label}
        </Typography>
        <Typography className="ellipsis-text" sx={{ fontSize: 13, color: theme.palette.text.secondary }}>
          {`$${price} - ${sales}+ Sales`}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          color: theme.palette[percent >= 0 ? 'success' : 'error'].main,
          border: '1px solid currentColor',
          alignItems: 'center',
          borderRadius: 1,
          height: 'fit-content',
          px: 0.5,
          py: 0.25,
          fontSize: 10,
        }}
      >
        {percent >= 0 ? (
          <ArrowUpward sx={{ fontSize: 'inherit', fontWeight: 'inherit' }} />
        ) : (
          <ArrowDownward sx={{ fontSize: 'inherit', fontWeight: 'inherit' }} />
        )}
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>{formatPercent(percent)}</Typography>
      </Stack>
    </Stack>
  );
};

export default Item;

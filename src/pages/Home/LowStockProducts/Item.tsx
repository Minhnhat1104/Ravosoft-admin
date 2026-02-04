import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Stack, SxProps, Typography, useTheme } from '@mui/material';

import productImg from './product-06.webp';

import { PalleteColor } from '~/themes/types/theme';
import { formatPercent } from '~/tools';

export interface LowStockItem {
  label: string;
  percent: number;
  id: string;
  quantity: number;
}

const Item = ({ label, id, percent, quantity }: LowStockItem) => {
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
        <Stack direction="row" sx={{ width: 1 }}>
          <Typography className="ellipsis-text" sx={{ fontSize: 14, fontWeight: 500, mb: 0.25 }}>
            {label}
          </Typography>

          <Typography sx={{ fontSize: 13, color: theme.palette.text.secondary, ml: 'auto' }}>Instock</Typography>
        </Stack>
        <Stack direction="row" sx={{ width: 1 }}>
          <Typography className="ellipsis-text" sx={{ fontSize: 13, color: theme.palette.text.secondary }}>
            {`ID : #${id}`}
          </Typography>

          <Typography sx={{ fontSize: 14, color: theme.palette.error.main, ml: 'auto' }}>{quantity}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Item;

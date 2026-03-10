import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Stack, SxProps, Typography, useTheme } from '@mui/material';

import { PalleteColor } from '~/themes/types/theme';
import { formatPercent } from '~/tools';

interface ItemProps {
  label: string;
  value: string;
  percent: number;
  color: PalleteColor;
  sx?: SxProps;
}

const Item = ({ label, value, percent, color, sx }: ItemProps) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        alignItems: 'center',
        ...sx,
      }}
    >
      <Typography className="ellipsis-text" sx={{ fontSize: 24, fontWeight: 500, mb: 0.25 }}>
        {value}
      </Typography>
      <Typography className="ellipsis-text" sx={{ fontSize: 14, color: theme.palette[color].main, mb: 1 }}>
        {label}
      </Typography>

      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          background: theme.palette[percent >= 0 ? 'success' : 'error'].main,
          color: theme.palette.common.white,
          alignItems: 'center',
          borderRadius: 1,
          height: 'fit-content',
          px: 1,
          py: 0.5,
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

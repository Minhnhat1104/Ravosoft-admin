import { ArrowDownward, ArrowUpward, SvgIconComponent } from '@mui/icons-material';
import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { formatMoney, formatPercent } from '~/tools';

interface ItemProps {
  label: string;
  value: number;
  percent: number;
  icon: SvgIconComponent;
  iconColor: 'warning' | 'info' | 'success' | 'secondary';
}

const Item = ({ label, value, percent, icon: Icon, iconColor }: ItemProps) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{ width: 1, border: theme.border.main, borderRadius: 2, p: 2, background: theme.palette.background.paper }}
      spacing={2}
    >
      <Stack direction="row" width={1}>
        <Stack>
          <Typography
            sx={{ fontSize: 18, fontWeight: 700, color: 'inherit', mr: 1 }}
          >{`$${formatMoney(value)}`}</Typography>
          <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{label}</Typography>
        </Stack>

        <Box
          sx={{
            width: 44,
            height: 44,
            display: 'flex',
            background: theme.palette[iconColor].lighter,
            ml: 'auto',
            borderRadius: 2,
          }}
        >
          <Icon sx={{ fontSize: 24, m: 'auto', color: theme.palette[iconColor].main }} />
        </Box>
      </Stack>
      <Divider />

      <Stack direction="row" width={1} fontSize={13}>
        <Typography className="ellipsis-text" sx={{ color: 'text.secondary', fontSize: 'inherit' }}>
          <Typography
            component="span"
            sx={{ color: percent >= 0 ? 'success.main' : 'error.main', mr: 0.5, fontSize: 'inherit' }}
          >
            {formatPercent(percent)}
          </Typography>
          vs Last Month
        </Typography>

        <Typography sx={{ textDecoration: 'underline', ml: 'auto', fontSize: 'inherit', cursor: 'pointer' }}>
          View All
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Item;

import { ArrowDownward, ArrowUpward, SvgIconComponent } from '@mui/icons-material';
import { Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { formatMoney, formatPercent } from '~/tools';

interface ItemProps {
  themeColor: 'warning' | 'info' | 'success' | 'secondary';
  label: string;
  value: number;
  percent: number;
  icon: SvgIconComponent;
}

const Item = ({ themeColor, label, value, percent, icon: Icon }: ItemProps) => {
  const theme = useTheme();

  const color = theme.palette[themeColor]?.main;
  return (
    <Stack sx={{ width: 1 }} spacing={2}>
      <Stack direction="row" sx={{ p: 2.5, background: color, borderRadius: 2, alignItems: 'center' }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            display: 'flex',
            background: theme.palette.background.paper,
            mr: 2,
            borderRadius: 2,
          }}
        >
          <Icon sx={{ fontSize: 24, m: 'auto', color: color }} />
        </Box>

        <Stack sx={{ flex: 1, minWidth: 0, color: theme.palette.background.paper }}>
          <Typography sx={{ fontSize: 14, color: 'inherit' }}>{label}</Typography>

          <Stack direction="row" width={1}>
            <Typography
              className="ellipsis-text"
              sx={{ fontSize: 18, fontWeight: 700, color: 'inherit', mr: 1 }}
            >{`$${formatMoney(value)}`}</Typography>

            {/* Chip */}
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                background: theme.palette.background.paper,
                color,
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
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Item;

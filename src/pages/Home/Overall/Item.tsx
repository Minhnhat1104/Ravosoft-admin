import { SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { PalleteColor } from '~/themes/types/theme';

interface ItemProps {
  label: string;
  value: string;
  icon: SvgIconComponent;
  iconColor: PalleteColor;
}

const Item = ({ label, value, icon: Icon, iconColor }: ItemProps) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        border: theme.border.main,
        borderRadius: 2,
        width: 1,
        background: theme.palette.background.paper,
        alignItems: 'center',
        p: 2,
      }}
    >
      <Icon sx={{ fontSize: 24, mb: 1, color: theme.palette[iconColor].main }} />
      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{value}</Typography>
    </Stack>
  );
};

export default Item;

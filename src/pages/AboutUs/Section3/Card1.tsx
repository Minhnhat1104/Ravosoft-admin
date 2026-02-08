import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { PalleteColor } from '~/themes/types/theme';

export interface Card1Props {
  icon: SvgIconComponent;
  value: string;
  label: string;
  color: PalleteColor;
}

const Card1 = ({ icon: Icon, value, label, color }: Card1Props) => {
  const theme = useTheme();
  return (
    <CustomCard sx={{ p: 3, background: theme.palette[color]?.lighter, alignItems: 'center' }}>
      <Icon sx={{ fontSize: 50, color: theme.palette[color].main }} />
      <Typography sx={{ fontSize: 26, fontWeight: 500 }}>{value}</Typography>
      <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 500 }}>
        {label}
      </Typography>
    </CustomCard>
  );
};

export default Card1;

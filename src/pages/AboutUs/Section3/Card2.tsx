import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';

import BaseAvatar from '~/components/BaseAvatar';
import CustomCard from '~/components/CustomCard';
import { PalleteColor } from '~/themes/types/theme';

export interface Card2Props {
  avatarUrl: string;
  name: string;
  dept: string;
  description: string;
}

const Card2 = ({ avatarUrl, name, dept, description }: Card2Props) => {
  const theme = useTheme();
  return (
    <CustomCard sx={{ p: 3, alignItems: 'center' }}>
      <BaseAvatar size={80} src={avatarUrl} name={name} sx={{ mx: 'auto', mb: 2 }} />
      <Typography sx={{ fontSize: 26, fontWeight: 500 }}>{name}</Typography>
      <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 500, mb: 2 }}>
        {dept}
      </Typography>

      <Typography color="text.secondary" sx={{ fontSize: 14, fontWeight: 500, textAlign: 'center' }}>
        {description}
      </Typography>
    </CustomCard>
  );
};

export default Card2;

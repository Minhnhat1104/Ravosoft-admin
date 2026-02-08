import React from 'react';

import { FacebookOutlined, SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';
import { IconContext } from 'react-icons/lib';
import { LuFacebook, LuInstagram, LuGlobe } from 'react-icons/lu';

import BaseAvatar from '~/components/BaseAvatar';
import CustomCard from '~/components/CustomCard';
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
      <Typography sx={{ fontSize: 26 }}>{name}</Typography>
      <Typography color="text.secondary" sx={{ fontSize: 14, mb: 2 }}>
        {dept}
      </Typography>

      <Typography sx={{ fontSize: 14, textAlign: 'center' }}>{description}</Typography>

      <Stack direction="row" sx={{ mx: 'auto', mt: 2 }} spacing={2}>
        <IconContext.Provider value={{ className: 'global-class-name', size: '16px' }}>
          <LuFacebook color={theme.palette.primary.main} />
          <LuInstagram color={theme.palette.error.main} />
          <LuGlobe color={theme.palette.info.main} />
        </IconContext.Provider>
      </Stack>
    </CustomCard>
  );
};

export default Card2;

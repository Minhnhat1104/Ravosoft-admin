import React from 'react';

import { SvgIconComponent } from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';

export interface ItemProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

const Item = ({ icon: Icon, title, description }: ItemProps) => {
  const theme = useTheme();
  return (
    <Stack direction="row" width={1}>
      <Icon sx={{ fontSize: 30, color: theme.palette.primary.main, mr: 3 }} />

      <Stack sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="h5" sx={{ fontSize: 17, fontWeight: 500, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 13 }}>{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default Item;

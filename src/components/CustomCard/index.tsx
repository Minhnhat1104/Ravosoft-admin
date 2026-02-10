import React, { ReactNode } from 'react';

import { Stack, SxProps, useTheme } from '@mui/material';

interface CustomCardProps {
  sx?: SxProps;
  children: ReactNode;
  spacing?: number;
}

const CustomCard = ({ sx, children, spacing }: CustomCardProps) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        background: theme.palette.common.white,
        borderRadius: 1.5,
        boxShadow: '1px 1px 7px rgba(154,154,204,.1)',
        ...sx,
      }}
      spacing={spacing}
    >
      {children}
    </Stack>
  );
};

export default CustomCard;

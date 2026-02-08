import React from 'react';

import { Stack, SxProps, useTheme } from '@mui/material';

interface CustomCardProps {
  sx?: SxProps;
}

const CustomCard = ({ sx }: CustomCardProps) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        background: theme.palette.common.white,
        borderRadius: 1,
        boxShadow: '1px 1px 7px rgba(154,154,204,.1)',
        ...sx,
      }}
    >
      CustomCard
    </Stack>
  );
};

export default CustomCard;

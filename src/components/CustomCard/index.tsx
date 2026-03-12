import React, { ReactNode } from 'react';

import { Stack, SxProps, Theme, Typography, useTheme } from '@mui/material';

interface CustomCardProps {
  sx?: SxProps<Theme>;
  children: ReactNode;
  spacing?: number;
  title?: string;
}

const CustomCard = ({ sx, children, spacing, title }: CustomCardProps) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        background: theme.palette.background.paper,
        borderRadius: 1.5,
        boxShadow: '1px 1px 7px rgba(154,154,204,.1)',
        p: 2,
        ...sx,
      }}
      spacing={spacing}
    >
      {title && (
        <Typography
          variant="h2"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            textTransform: 'uppercase',
            mb: 2,
            position: 'relative',
            '&::before': {
              content: "''",
              position: 'absolute',
              height: '100%',
              width: 3,
              left: -6,
              top: '50%',
              transform: 'translateY(-50%)',
              borderLeft: `2px solid ${theme.palette.primary.main}`,
            },
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Stack>
  );
};

export default CustomCard;

import React from 'react';

import { Box, Stack, Typography, useTheme } from '@mui/material';

interface ItemProps {
  label: string;
  value: string;
}

const Item = ({ label, value }: ItemProps) => {
  const theme = useTheme();
  return (
    <Stack sx={{ p: 1, border: theme.border.main, borderRadius: 2 }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ width: 6, height: 6, borderRadius: 999, mr: 0.5, background: theme.palette.warning.main }} />
        <Typography color="text.secondary">{label}</Typography>
      </Stack>
      <Typography sx={{ fontSize: 18, fontWeight: 500 }}>{value}</Typography>
    </Stack>
  );
};

export default Item;

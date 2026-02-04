import React from 'react';

import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingCircularProps {
  loading?: boolean;
  fullHeight?: boolean;
  sx?: SxProps;
}

function LoadingCircular({ fullHeight, sx }: LoadingCircularProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: fullHeight ? '100%' : 300,
        ...sx,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingCircular;

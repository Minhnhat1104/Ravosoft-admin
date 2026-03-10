import React from 'react';

import { Button, Stack, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

interface ErrorFallback {
  code: number;
  message?: string;
}

const ErrorFallback = ({ code, message }: ErrorFallback) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: 1,
        height: 1,
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1" mb={2}>
        <span style={{ fontSize: 105 }}>{code}</span> error
      </Typography>
      {message ? (
        <Typography variant="h2" sx={{ fontWeight: 500, mb: 1 }}>
          {message}
        </Typography>
      ) : (
        <>
          <Typography variant="h2" sx={{ fontWeight: 500, mb: 1 }}>
            Oops. The page you were looking for doesn't exist.
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.6 }}>
            You may have mistyped the address or the page may have moved.
          </Typography>
        </>
      )}
      <Button component={Link} color="secondary" variant="contained" sx={{ mt: 3 }} to="/dashboard/dashboard-1">
        Back to Home
      </Button>
    </Stack>
  );
};

export default ErrorFallback;

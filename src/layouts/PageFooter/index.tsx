import React from 'react';

import { Box, Typography } from '@mui/material';

const PageFooter = () => {
  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        textAlign: 'center',
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        mt: 'auto', // Pushes footer to the bottom of the container
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Copyright © 2026{' '}
        <Typography component="span" variant="body2" color="primary">
          Nowa.
        </Typography>{' '}
        Designed with ❤️ by{' '}
        <Typography component="span" variant="body2" color="primary">
          MinhNhat
        </Typography>{' '}
        All rights reserved
      </Typography>
    </Box>
  );
};

export default PageFooter;

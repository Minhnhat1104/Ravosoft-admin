import React, { useState } from 'react';

import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Chip, ClickAwayListener, IconButton, Paper, Popper, Stack, Typography, useTheme } from '@mui/material';

const ShoppingCart = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Badge badgeContent={4} color="warning">
      <IconButton ref={setAnchorEl} onClick={() => setOpen(!open)} size="small">
        <ShoppingCartOutlined fontSize="small" />
      </IconButton>

      <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
        <Paper sx={{ width: 300, zIndex: 333, background: theme.palette.background.paper }}>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" width={1} sx={{ p: 2 }}>
              <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Shopping Cart</Typography>
              <Chip label={'Items 5'} />
            </Stack>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Badge>
  );
};

export default ShoppingCart;

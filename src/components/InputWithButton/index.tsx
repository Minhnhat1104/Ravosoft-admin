import React from 'react';

import { Button, ButtonGroup, InputBase, SxProps, useTheme } from '@mui/material';

interface InputWithButtonProps {
  placeholder: string;
  textButton: string;
  onClick?: () => void;
  sx?: SxProps;
}

const InputWithButton = ({ placeholder, textButton, onClick, sx }: InputWithButtonProps) => {
  const theme = useTheme();
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group"
      sx={{ border: theme.border.main, width: 1, ...sx }}
    >
      <InputBase
        placeholder={placeholder}
        sx={{ flex: 1, minWidth: 0, borderTopRightRadius: 0, px: 1.5, background: theme.palette.common.white }}
      />

      <Button variant="contained" sx={{ height: 1 }} onClick={onClick}>
        {textButton}
      </Button>
    </ButtonGroup>
  );
};

export default InputWithButton;

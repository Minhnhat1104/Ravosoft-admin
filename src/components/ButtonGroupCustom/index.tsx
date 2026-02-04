import React from 'react';

import { SxProps, useTheme, ButtonGroup, Button } from '@mui/material';

import { LabelValue } from '~/types';

interface ButtonGroupCustomProps {
  value: LabelValue | null;
  onChange: (nVal: LabelValue) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  options: LabelValue[];
  sx?: SxProps;
}

const ButtonGroupCustom = (props: ButtonGroupCustomProps) => {
  const { value, onChange, options, disabled = false, sx, size = 'medium' } = props;

  const theme = useTheme();

  return (
    <ButtonGroup variant="outlined" size={size} disabled={disabled} sx={sx}>
      {options?.map((_option) => (
        <Button
          key={_option?.value}
          variant={_option?.value === value?.value ? 'contained' : 'outlined'}
          onClick={() => onChange(_option)}
        >
          {_option?.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ButtonGroupCustom;

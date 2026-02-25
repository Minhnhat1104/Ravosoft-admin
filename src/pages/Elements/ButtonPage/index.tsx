import React, { useState } from 'react';

import { DeleteOutline } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, FormControlLabel, IconButton, Stack, Switch, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { MuiVariant } from '~/themes/types/theme';
import { LabelValue } from '~/types';

type Color = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

const colors: Color[] = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

const variants: MuiVariant[] = ['text', 'outlined', 'contained', 'light', 'dashed'];

const sizeOptions: LabelValue<string, 'small' | 'medium' | 'large'>[] = [
  {
    label: 'Small',
    value: 'small',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'Large',
    value: 'large',
  },
];

const ButtonPage = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [size, setSize] = useState<LabelValue<string, 'small' | 'medium' | 'large'>>(sizeOptions[1]);

  return (
    <Stack p={2} height="100%" className="scroll-box">
      <Stack direction="row" alignItems="center" spacing={2}>
        <FormControlLabel
          control={<Switch value={disabled} onChange={(e, checked) => setDisabled(checked)} />}
          label="Disabed"
        />

        <FormControlLabel
          control={<Switch value={loading} onChange={(e, checked) => setLoading(checked)} />}
          label="Loading"
        />
        {/* <ButtonGroupCustom options={sizeOptions} value={size} onChange={setSize} /> */}
      </Stack>

      <CustomCard sx={{ p: 2 }}>
        <Typography variant="h3">Button</Typography>
        <Stack spacing={2}>
          {variants?.map((_variant) => {
            return (
              <Stack key={_variant} direction="row" alignItems="center" spacing={2}>
                <Typography>{_variant}</Typography>
                {colors?.map((_color) => (
                  <Button key={_color} size={size?.value} disabled={disabled} variant={_variant} color={_color}>
                    {_color}
                  </Button>
                ))}
              </Stack>
            );
          })}
        </Stack>
      </CustomCard>

      <Divider />

      <CustomCard sx={{ p: 2 }}>
        <Typography variant="h3">Loading Button</Typography>

        <Stack spacing={2}>
          {variants?.map((_variant) => {
            return (
              <Stack key={_variant} direction="row" alignItems="center" spacing={2}>
                <Typography>{_variant}</Typography>
                {colors?.map((_color) => (
                  <LoadingButton
                    key={_color}
                    size={size?.value}
                    loading={loading}
                    disabled={disabled}
                    variant={_variant}
                    color={_color}
                  >
                    {_color}
                  </LoadingButton>
                ))}
              </Stack>
            );
          })}
        </Stack>
      </CustomCard>

      <Divider />

      <CustomCard sx={{ p: 2 }}>
        <Typography variant="h3">Icon Button</Typography>

        <Stack spacing={2}>
          {variants?.map((_variant) => {
            return (
              <Stack key={_variant} direction="row" alignItems="center" spacing={2}>
                <Typography>{_variant}</Typography>
                {colors?.map((_color) => (
                  <IconButton
                    key={_color}
                    size={size?.value}
                    // isLoading={loading}
                    disabled={disabled}
                    variant={_variant}
                    color={_color}
                  >
                    <DeleteOutline />
                  </IconButton>
                ))}
              </Stack>
            );
          })}
        </Stack>
      </CustomCard>
    </Stack>
  );
};

export default ButtonPage;

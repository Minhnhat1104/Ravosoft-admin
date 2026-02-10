import React from 'react';

import { Grid, Stack, SxProps, Typography } from '@mui/material';

import { WriteField } from '~/types';

interface WriteFieldsProps {
  label: string;
  fields: WriteField[];
  sx?: SxProps;
}

const WriteFields = ({ label, fields, sx }: WriteFieldsProps) => {
  return (
    <Stack sx={sx}>
      <Typography sx={{ fontWeight: 600, mb: 3, textTransform: 'uppercase' }}>{label}</Typography>
      <Grid container spacing={2}>
        {fields?.map((_field) => (
          <React.Fragment key={_field?.keyName}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography color="text.secondary" sx={{ fontWeight: 500, mt: 0.75 }}>
                {_field?.label}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 9 }}>
              <_field.component {..._field?.componentProps} defaultValue={_field?.defaultValue} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Stack>
  );
};

export default WriteFields;

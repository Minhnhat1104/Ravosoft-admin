import React from 'react';

import { Chip, Grid, Stack } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { palleteColors } from '~/themes';

interface ChipPageProps {}

const ChipPage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Chip">
            <Stack direction="row" sx={{ mt: -2, ml: -2, flexWrap: 'wrap' }}>
              {palleteColors?.map((_color) => (
                <Chip
                  key={_color}
                  label={_color}
                  color={_color}
                  variant="filled"
                  sx={{ mt: 2, ml: 2, width: 'fit-content' }}
                />
              ))}
            </Stack>
          </CustomCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Light Chip">
            <Stack direction="row" sx={{ mt: -2, ml: -2, flexWrap: 'wrap' }}>
              {palleteColors?.map((_color) => (
                <Chip
                  key={_color}
                  label={_color}
                  color={_color}
                  variant="light"
                  sx={{ mt: 2, ml: 2, width: 'fit-content' }}
                />
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Outline Chip">
            <Stack direction="row" sx={{ mt: -2, ml: -2, flexWrap: 'wrap' }}>
              {palleteColors?.map((_color) => (
                <Chip
                  key={_color}
                  label={_color}
                  color={_color}
                  variant="outlined"
                  sx={{ mt: 2, ml: 2, width: 'fit-content' }}
                />
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Size Chip">
            <Stack direction="row" sx={{ mt: -2, ml: -2, flexWrap: 'wrap' }}>
              {['large', 'medium', 'small']?.map((_size) => (
                <Chip
                  key={_size}
                  label={_size}
                  size={_size as 'small' | 'medium' | 'large'}
                  //   variant="outlined"
                  sx={{ mt: 2, ml: 2, width: 'fit-content' }}
                />
              ))}
            </Stack>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ChipPage;

import React from 'react';

import { Chip, Grid, Stack, Typography, TypographyVariant } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { palleteColors } from '~/themes';

interface TypographyPageProps {}

const typographyVariants: TypographyVariant[] = [
  'button',
  'caption',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'overline',
];

const TypographyPage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Typography variant">
            <Stack spacing={1}>
              {typographyVariants?.map((_variant) => (
                <Typography key={_variant} variant={_variant}>
                  {`${_variant}. Heading`}
                </Typography>
              ))}
            </Stack>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TypographyPage;

import React from 'react';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';

import CustomCard from '~/components/CustomCard';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxPage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Basic Checkboxes">
            <Stack direction="row" spacing={2} pt={2}>
              <Checkbox {...label} defaultChecked />
              <Checkbox {...label} />
              <Checkbox {...label} disabled />
              <Checkbox {...label} disabled checked />
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Checkboxes with labels">
            <FormGroup row sx={{ pt: 2 }}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              <FormControlLabel required control={<Checkbox />} label="Required" />
              <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Checkbox Sizes & Colors">
            <Stack direction="row" spacing={2} pt={2} alignItems="center">
              <Checkbox {...label} defaultChecked size="small" />
              <Checkbox {...label} defaultChecked />
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: pink[800],
                  '&.Mui-checked': {
                    color: pink[600],
                  },
                }}
              />
              <Checkbox {...label} defaultChecked color="success" />
              <Checkbox {...label} defaultChecked color="default" />
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Icon Checkboxes">
            <Stack direction="row" spacing={2} pt={2}>
              <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                color="secondary"
                defaultChecked
              />
            </Stack>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CheckboxPage;

import React, { useState } from 'react';

import { Box, Grid, Slider, Stack, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { GRID_CARD_SPACING } from '~/config/constants';

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

const SliderPage = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Continuous Slider">
            <Box sx={{ width: '100%', pt: 2, px: 2 }}>
              <Typography id="continuous-slider" gutterBottom>
                Volume
              </Typography>
              <Slider aria-label="Volume" defaultValue={30} />
              <Typography id="disabled-slider" gutterBottom sx={{ mt: 2 }}>
                Disabled
              </Typography>
              <Slider disabled defaultValue={30} />
            </Box>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Discrete Slider">
            <Box sx={{ width: '100%', pt: 2, px: 2 }}>
              <Typography id="discrete-slider" gutterBottom>
                Temperature
              </Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
            </Box>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Range Slider">
            <Box sx={{ width: '100%', pt: 2, px: 2 }}>
              <Typography id="range-slider" gutterBottom>
                Temperature range
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Slider with Custom Marks">
            <Box sx={{ width: '100%', pt: 2, px: 2 }}>
              <Typography id="custom-marks-slider" gutterBottom>
                Custom marks
              </Typography>
              <Slider
                aria-label="Custom marks"
                defaultValue={20}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SliderPage;

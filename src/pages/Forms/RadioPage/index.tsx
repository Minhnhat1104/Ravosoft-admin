import React, { useState } from 'react';

import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack } from '@mui/material';
import { pink } from '@mui/material/colors';

import CustomCard from '~/components/CustomCard';

const RadioPage = () => {
  const [value, setValue] = useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Basic Radio Group">
            <FormControl sx={{ pt: 2 }}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Radio Direction">
            <FormControl sx={{ pt: 2 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender (Row)</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="female"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="other" />
              </RadioGroup>
            </FormControl>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Controlled Radio">
            <FormControl sx={{ pt: 2 }}>
              <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Radio Colors & Sizes">
            <FormControl sx={{ pt: 2 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Radio checked value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} size="small" />
                <Radio checked value="b" name="radio-buttons" inputProps={{ 'aria-label': 'B' }} />
                <Radio checked value="c" name="radio-buttons" color="success" />
                <Radio
                  checked
                  value="d"
                  name="radio-buttons"
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600],
                    },
                  }}
                />
              </Stack>
            </FormControl>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default RadioPage;

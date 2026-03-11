import React, { useState } from 'react';

import { Box, Grid, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material';

import CustomCard from '~/components/CustomCard';

const SelectPage = () => {
  const [age, setAge] = useState('');
  const [multipleAge, setMultipleAge] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleMultipleChange = (event: SelectChangeEvent<typeof multipleAge>) => {
    const {
      target: { value },
    } = event;
    setMultipleAge(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Basic Select">
            <Box sx={{ minWidth: 120, pt: 2 }}>
              <Select
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  <em>Select Age</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Select Sizes">
            <Stack spacing={2} sx={{ pt: 2 }}>
              <Select
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                size="small"
                displayEmpty
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              <Select
                id="demo-select-normal"
                value={age}
                onChange={handleChange}
                displayEmpty
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Multiple Select">
            <Box sx={{ minWidth: 120, pt: 2 }}>
              <Select
                id="demo-multiple-name"
                multiple
                displayEmpty
                value={multipleAge}
                onChange={handleMultipleChange}
                fullWidth
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em style={{ color: 'rgba(0,0,0,0.5)' }}>Select Names</em>;
                  }
                  return selected.join(', ');
                }}
              >
                {['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander'].map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Native Select">
            <Box sx={{ minWidth: 120, pt: 2 }}>
              <Select
                native
                defaultValue={30}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
                fullWidth
              >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SelectPage;

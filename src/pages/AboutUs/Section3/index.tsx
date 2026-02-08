import React from 'react';

import { BusinessOutlined, HouseOutlined, Shop2Outlined } from '@mui/icons-material';
import { Container, Grid, Stack, Typography, useTheme } from '@mui/material';

import Card1, { Card1Props } from './Card1';

const section3Items: Card1Props[] = [
  {
    icon: Shop2Outlined,
    value: '256',
    label: 'Completed Projects',
    color: 'success',
  },
  {
    icon: BusinessOutlined,
    value: '7,234',
    label: 'Total Customers',
    color: 'error',
  },
  {
    icon: HouseOutlined,
    value: '846',
    label: 'Available Employeed',
    color: 'warning',
  },
  {
    icon: HouseOutlined,
    value: '153',
    label: 'Awards won',
    color: 'primary',
  },
];

const Section3 = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ maxWidth: '80%', mx: 'auto', px: 2, my: 6 }}>
      <Typography sx={{ fontSize: 26 }}>Our Motto</Typography>
      <Typography sx={{ fontSize: 14, mb: 3 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Natus, aliquam voluptas repellat eum beatae veniam, cumque eligendi earum
        praesentium, in corrupti reprehenderit cum architecto quisquam? Quibusdam quaerat veritatis perferendis iusto. !
      </Typography>

      <Grid container sx={{ width: 1 }} spacing={3}>
        {section3Items?.map((_item) => (
          <Grid
            key={_item?.label}
            size={{ xs: 12, sm: (12 / section3Items?.length) * 2, md: 12 / section3Items?.length }}
          >
            <Card1 {..._item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Section3;

import React from 'react';

import { BusinessOutlined, HouseOutlined, Shop2Outlined } from '@mui/icons-material';
import { Container, Grid, Stack, SxProps, Typography, useTheme } from '@mui/material';

import face1 from '~/assets/img/face/face-1.jpg';
import face2 from '~/assets/img/face/face-2.jpg';
import face3 from '~/assets/img/face/face-3.jpg';
import face4 from '~/assets/img/face/face-4.jpg';

import Card1, { Card1Props } from './Card1';
import Card2, { Card2Props } from './Card2';

const card1Items: Card1Props[] = [
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

const card2Items: Card2Props[] = [
  {
    avatarUrl: face1,
    name: 'Rosen Berg',
    dept: 'Chief Manager',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !',
  },
  {
    avatarUrl: face2,
    name: 'Mclaren mcannen',
    dept: 'Sales Manager',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !',
  },
  {
    avatarUrl: face3,
    name: 'Shimpa Craig',
    dept: 'Author & writer',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !',
  },
  {
    avatarUrl: face4,
    name: 'Limo Peter',
    dept: 'Operations Head',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident !',
  },
];

interface Section3Props {
  sx?: SxProps;
}

const Section3 = ({ sx }: Section3Props) => {
  const theme = useTheme();
  return (
    <Stack sx={sx}>
      <Grid container sx={{ width: 1 }} spacing={3}>
        {card1Items?.map((_item) => (
          <Grid key={_item?.label} size={{ xs: 12, sm: (12 / card1Items?.length) * 2, md: 12 / card1Items?.length }}>
            <Card1 {..._item} />
          </Grid>
        ))}
      </Grid>

      <Grid container sx={{ width: 1, mt: 6 }} spacing={3}>
        {card2Items?.map((_item) => (
          <Grid key={_item?.name} size={{ xs: 12, sm: (12 / card2Items?.length) * 2, md: 12 / card2Items?.length }}>
            <Card2 {..._item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Section3;

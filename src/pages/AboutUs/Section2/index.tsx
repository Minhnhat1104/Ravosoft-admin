import React from 'react';

import { BusinessOutlined, HouseOutlined, Shop2Outlined } from '@mui/icons-material';
import { Container, Stack, Typography, useTheme } from '@mui/material';

import Item, { ItemProps } from './Item';

const section2Items: ItemProps[] = [
  {
    icon: Shop2Outlined,
    title: 'High Standards in design !',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos sint, officia vel ab perferendis, dolores placeat dolor aliquam debitis eius, illum ullam ratione blanditiis fugiat omnis beatae odio vitae!',
  },
  {
    icon: BusinessOutlined,
    title: 'Most anticipated techniques .',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos sint, officia vel ab perferendis illum ullam ratione blanditiis fugiat omnis beatae odio vitae!',
  },
  {
    icon: HouseOutlined,
    title: 'Even rated customers ?',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos sint, officia vel ab perferendis, dolores placeat dolor aliquam debitis eius, illum ullam ratione blanditiis fugiat omnis beatae odio vitae!',
  },
];

const Section2 = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ maxWidth: '80%', mx: 'auto', px: 2, my: 6 }}>
      <Typography sx={{ fontSize: 26 }}>Our Motto</Typography>
      <Typography sx={{ fontSize: 14, mb: 3 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam similique provident Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Natus, aliquam voluptas repellat eum beatae veniam, cumque eligendi earum
        praesentium, in corrupti reprehenderit cum architecto quisquam? Quibusdam quaerat veritatis perferendis iusto. !
      </Typography>

      <Stack sx={{ width: 1 }} spacing={2}>
        {section2Items?.map((_item) => (
          <Item key={_item?.title} {..._item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Section2;

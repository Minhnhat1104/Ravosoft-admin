import { Button, Stack } from '@mui/material';
import { t } from 'i18next';
import { Link, useMatch } from 'react-router-dom';

import Item from './Item';

import { LangKey } from '~/lang/langKey';
import { LabelValue } from '~/types';

const items: LabelValue[] = [
  {
    label: t(LangKey.explore),
    value: '/explore',
  },
  {
    label: t(LangKey.myPhotos),
    value: '/my-photos',
  },
];

const NavList = () => {
  const isExplore = useMatch('/explore');
  const isMyPhoto = useMatch('/my-photos');
  return (
    <Stack direction="row" alignItems="center" component="nav">
      {items?.map((_item) => (
        <Item key={_item?.value} data={_item} />
      ))}
    </Stack>
  );
};

export default NavList;

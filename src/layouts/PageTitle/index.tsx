import React, { useEffect, useState } from 'react';

import { Breadcrumbs, Stack, Typography } from '@mui/material';
import { Link, matchRoutes, useLocation } from 'react-router-dom';

import { PAGE_TITLE } from '~/config/constants';

import { isNavLeaf } from '../SideBar/config';
import { getBreadcrumbItems } from '../SideBar/helper';

const PageTitle = () => {
  const { pathname } = useLocation();
  const items = getBreadcrumbItems(pathname);

  const lastItem = items[items?.length - 1];

  useEffect(() => {
    let title = PAGE_TITLE;
    if (lastItem?.label) {
      title = title + ' - ' + lastItem?.label;
    }
    document.title = title;
  }, [lastItem.id]);

  return (
    <Stack direction="row" sx={{ width: 1, alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
      <Typography sx={{ fontSize: 18, fontWeight: 500, textTransform: 'uppercase' }}>{lastItem?.label}</Typography>

      <Breadcrumbs aria-label="breadcrumb">
        {items?.map((_item, i) => {
          if (isNavLeaf(_item)) {
            return (
              // <Typography key={_item?.id} component={Link} to={_item?.url}>
              //   {_item?.label}
              // </Typography>
              <Typography key={_item?.id} color="primary.main">
                {_item?.label}
              </Typography>
            );
          } else {
            return <Typography key={_item?.id}>{_item?.label}</Typography>;
          }
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default PageTitle;

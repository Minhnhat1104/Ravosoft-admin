import React from 'react';

import { Grid, Stack } from '@mui/material';

import { tableColors } from './data';
import Item from './Item';

interface TablePageProps {}

const TablePage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        {tableColors?.map((_color) => (
          <Grid key={_color} size={{ xs: 12, md: 4 }}>
            <Item title={`${_color || ''} Table`} color={_color} />
          </Grid>
        ))}

        {tableColors?.map((_color) => (
          <Grid key={_color} size={{ xs: 12, md: 4 }}>
            <Item title={`${_color || ''} bordered Table`} color={_color} variant="bordered" />
          </Grid>
        ))}

        {tableColors?.map((_color) => (
          <Grid key={_color} size={{ xs: 12, md: 4 }}>
            <Item title={`${_color || ''} filled Table`} color={_color} variant="filled" />
          </Grid>
        ))}

        {tableColors?.map((_color) => (
          <Grid key={_color} size={{ xs: 12, md: 4 }}>
            <Item title={`${_color || ''} striped row Table`} color={_color} variant="striped-row" />
          </Grid>
        ))}

        {tableColors?.map((_color) => (
          <Grid key={_color} size={{ xs: 12, md: 4 }}>
            <Item title={`${_color || ''} striped col Table`} color={_color} variant="striped-col" />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TablePage;

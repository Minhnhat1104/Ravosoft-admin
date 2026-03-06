import React from 'react';

import { Grid, Pagination, Stack, TablePagination } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import { paginationColors } from './data';

interface TablePageProps {}

const TablePage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Basic pagination">
            <Stack spacing={1.5}>
              {paginationColors?.map((_color) => (
                <Pagination key={_color || 'default'} count={10} color={_color} />
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Outlined pagination">
            <Stack spacing={1.5}>
              {paginationColors?.map((_color) => (
                <Pagination key={_color || 'default'} count={10} color={_color} variant="outlined" />
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Rounded pagination">
            <Stack spacing={1.5}>
              <Pagination count={10} shape="rounded" />
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Pagination size">
            <Stack spacing={1.5}>
              <Pagination count={10} size="small" />
              <Pagination count={10} />
              <Pagination count={10} size="large" />
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Buttons">
            <Stack spacing={1.5}>
              <Pagination count={10} showFirstButton showLastButton />
              <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Table pagination">
            <TablePagination
              component="div"
              count={100}
              page={2}
              onPageChange={() => {}}
              rowsPerPage={10}
              onRowsPerPageChange={() => {}}
            />
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TablePage;

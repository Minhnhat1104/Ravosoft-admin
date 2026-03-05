import React from 'react';

import { Delete, DeleteOutline, Edit, EditOutlined } from '@mui/icons-material';
import {
  Chip,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  IconButton,
} from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { palleteColors } from '~/themes';

import { users } from './data';

interface TablePageProps {}

const TablePage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Basic Tables">
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Created On</TableCell>
                    <TableCell>Number</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell variant="head" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.createdOn}</TableCell>
                      <TableCell>{row.number}</TableCell>
                      <TableCell>
                        <Chip variant="outlined" label={row?.status?.label} color={row?.status?.color} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CustomCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Bordered Tables">
            <TableContainer component={Paper}>
              <Table aria-label="simple table" variant="bordered">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell variant="head" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        <Chip variant="light" label={row?.status?.label} color={row?.status?.color} />
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <IconButton size="small" color="success" sx={{ mr: 1 }}>
                          <EditOutlined fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteOutline fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Striped rows">
            <TableContainer component={Paper}>
              <Table aria-label="striped-rows table" variant="striped-row">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell variant="head" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        <Chip variant="light" label={row?.status?.label} color={row?.status?.color} />
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <IconButton size="small" color="success" sx={{ mr: 1 }}>
                          <EditOutlined fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteOutline fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Striped columns">
            <TableContainer component={Paper}>
              <Table aria-label="striped-col table" variant="striped-col">
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell variant="head" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        <Chip variant="light" label={row?.status?.label} color={row?.status?.color} />
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <IconButton size="small" color="success" sx={{ mr: 1 }}>
                          <EditOutlined fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <DeleteOutline fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TablePage;

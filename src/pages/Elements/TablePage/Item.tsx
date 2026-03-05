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
  TableVariant,
} from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { palleteColors } from '~/themes';
import { PalleteColor } from '~/themes/types/theme';

import { users } from './data';

interface ItemProps {
  title: string;
  variant?: TableVariant;
  color?: PalleteColor;
}

const Item = ({ title, variant, color }: ItemProps) => {
  return (
    <CustomCard title={title}>
      <TableContainer component={Paper}>
        <Table aria-label={`${variant} table`} variant={variant} color={color}>
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
  );
};

export default Item;

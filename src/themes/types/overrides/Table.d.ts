// eslint-disable-next-line
import * as Button from '@mui/material/Table';
import { PalleteColor } from '../theme';

declare module '@mui/material/Table' {
  interface TableOwnProps {
    variant?: 'bordered' | 'striped-row' | 'striped-col';
    color?: PalleteColor;
  }
}

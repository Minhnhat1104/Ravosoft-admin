// eslint-disable-next-line
import * as Button from '@mui/material/Table';
import { PalleteColor } from '../theme';

declare module '@mui/material/Table' {
  type TableVariant = 'bordered' | 'striped-row' | 'striped-col' | 'filled';
  interface TableOwnProps {
    variant?: TableVariant;
    color?: PalleteColor;
  }
}

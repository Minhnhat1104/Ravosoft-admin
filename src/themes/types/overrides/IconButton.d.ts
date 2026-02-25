import '@mui/material/IconButton';
import { MuiVariant } from '../theme';

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: MuiVariant;
  }
}

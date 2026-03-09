// material-ui
import { SimplePaletteColorOptions, PaletteColorOptions } from '@mui/material/styles';

// ==============================|| DEFAULT THEME - TYPES  ||============================== //

export type PalleteColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type MuiVariant = 'text' | 'outlined' | 'contained' | 'light' | 'dashed';

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  grey: SimplePaletteColorOptions;
  link: string;
};

export type CustomShadowProps = {
  button: string;
  text: string;
  z1: string;
  primary: string;
  primaryButton: string;
  secondary: string;
  secondaryButton: string;
  error: string;
  errorButton: string;
  warning: string;
  warningButton: string;
  info: string;
  infoButton: string;
  success: string;
  successButton: string;
  grey: string;
  greyButton: string;
};

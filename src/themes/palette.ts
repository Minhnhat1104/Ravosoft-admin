import { alpha, createTheme } from '@mui/material/styles';

import { PresetColor, ThemeMode } from '~/themes/types/config';
import { PaletteThemeProps } from '~/themes/types/theme';

import ThemeOption from './theme';

export const getPaletteInstance = (mode: ThemeMode, presetColor: PresetColor) => {
  const paletteColor: PaletteThemeProps = ThemeOption(mode);

  return createTheme({
    palette: {
      mode,
      common: {
        black: mode === 'light' ? '#000' : '#fff',
        white: mode === 'light' ? '#fff' : '#000',
      },
      ...paletteColor,
      text: {
        primary: mode === 'dark' ? alpha(paletteColor.grey[900]!, 0.87) : paletteColor.grey[900],
        secondary: mode === 'dark' ? alpha(paletteColor.grey[900]!, 0.45) : paletteColor.grey[600],
        disabled: mode === 'dark' ? alpha(paletteColor.grey[900]!, 0.1) : paletteColor.grey[500],
      },
      action: {
        disabled: paletteColor.grey[300],
      },
      divider: mode === 'dark' ? paletteColor.grey[200] : paletteColor.grey[200],
      border: {
        light: paletteColor.grey[200] || '',
        main: paletteColor.grey[200] || '',
        dark: paletteColor.grey[500] || '',
      },
      background: {
        paper: mode === 'dark' ? paletteColor.grey[50] : '#fff',
        default: mode === 'dark' ? paletteColor.grey[50] : '#fff',
        softGrey: paletteColor.grey[100],
        darkGrey: paletteColor.grey[200],
      },
    },
  });
};

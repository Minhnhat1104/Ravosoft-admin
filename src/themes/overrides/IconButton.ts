// material-ui
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';

export default function ThemeIconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {},
      defaultProps: {
        shape: 'square' as const,
      },
    },
  };
}

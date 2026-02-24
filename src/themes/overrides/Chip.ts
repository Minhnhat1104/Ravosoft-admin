// material-ui
import { ChipProps } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';
import { ExtendedStyleProps } from '../types/custom';

export default function ThemeChip(theme: Theme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
      variants: [
        ...palleteColors.map((color) => {
          return {
            props: { variant: 'light' as const, color },
            style: {
              background: theme.palette[color].lighter,
              color: theme.palette[color].main,
            },
          };
        }),
      ],
    },
  };
}

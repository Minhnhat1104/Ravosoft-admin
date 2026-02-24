// material-ui
import { ChipProps } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';

export default function ThemeChip(theme: Theme) {
  return {
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          fontSize: 10,
          fontWeight: 400,
        },
        sizeMedium: {
          fontSize: 12,
          fontWeight: 400,
        },
        sizeLarge: {
          fontSize: 14,
          fontWeight: 400,
        },
      },
      defaultProps: {
        shape: 'square',
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
        {
          props: { shape: 'rounded' },
          style: {
            borderRadius: 999,
          },
        },
        {
          props: { shape: 'square' },
          style: {
            borderRadius: 4,
          },
        },
      ],
    },
  };
}

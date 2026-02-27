// material-ui
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';

export default function ThemeAlert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {},
      defaultProps: {
        icon: false,
      },
      variants: [
        ...palleteColors.map((color) => {
          return {
            props: { variant: 'border' as const, severity: color },
            style: {
              background: theme.palette[color].lighter,
              color: theme.palette[color].main,
              border: `1px dashed ${theme.palette[color].main}`,
            },
          };
        }),
      ],
    },
  };
}

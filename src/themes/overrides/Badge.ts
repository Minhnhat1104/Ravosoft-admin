// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeBadge(theme: Theme) {
  return {
    MuiBadge: {
      styleOverrides: {
        badge: {
          width: 15,
          height: 15,
          minWidth: 0,
          fontSize: 10,
          p: '2px 4px',
        },
      },
    },
  };
}

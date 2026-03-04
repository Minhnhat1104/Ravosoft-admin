// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeMuiListItemButton(theme: Theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          p: '4px 16px',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: 20,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  };
}

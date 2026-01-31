// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeButton(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {},
    },
  };
}

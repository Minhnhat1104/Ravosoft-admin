// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeTextField(theme: Theme) {
  return {
    MuiTextField: {
      defaultProps: {
        // size: 'small',
      },
      styleOverrides: {},
    },
  };
}

// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeTextField(theme: Theme) {
  const sizeVariants = [
    {
      props: { size: 'small' },
      style: {
        '& .MuiInputBase-input': { padding: '6px 16px ' },
      },
    },
    {
      props: { size: 'medium' },
      style: {
        '& .MuiInputBase-input': { padding: '10px 16px ' },
      },
    },
    {
      props: { size: 'large' },
      style: {
        '& .MuiInputBase-input': { padding: '14px 16px' },
      },
    },
  ];
  return {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      variants: [...sizeVariants],
    },
    MuiInput: {
      variants: [...sizeVariants],
    },
    MuiOutlinedInput: {
      variants: [...sizeVariants],
    },
    MuiFilledInput: {
      variants: [...sizeVariants],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          marginBottom: 4,
          color: theme.palette.text.primary,
        },
      },
    },
  };
}

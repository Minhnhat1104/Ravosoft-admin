// material-ui
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';

export default function ThemePagination(theme: Theme) {
  const customVariants = palleteColors?.reduce((prev: any[], color) => {
    const { darker, dark, main, light, lighter } = theme.palette[color];

    prev.push({
      props: { variant: 'light' as const, color },
      style: {
        background: lighter,
        color: main,
      },
    });

    prev.push({
      props: { variant: 'dashed' as const, color },
      style: {
        background: lighter,
        color: main,
        border: main,
        '&:hover': {
          color: darker,
        },
      },
    });

    return prev;
  }, []);

  return {
    MuiPagination: {
      defaultProps: {},
      styleOverrides: {},
      variants: [...customVariants],
    },
  };
}

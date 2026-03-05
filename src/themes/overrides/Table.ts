// material-ui
import { alpha, Theme } from '@mui/material/styles';

export default function ThemeTable(theme: Theme) {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: theme.border.main,
          padding: 12,
        },
        head: {
          fontSize: 14,
          fontWeight: 500,
        },
      },
    },
    MuiTable: {
      variants: [
        {
          props: { variant: 'bordered' as const },
          style: {
            '& .MuiTableCell-root': {
              border: theme.border.main,
            },
          },
        },
        {
          props: { variant: 'striped-row' as const },
          style: {
            '& .MuiTableRow-root:nth-of-type(even)': {
              background: theme.palette.background.softGrey,
            },
          },
        },
        {
          props: { variant: 'striped-col' as const },
          style: {
            '& .MuiTableCell-root:nth-of-type(even)': {
              background: theme.palette.background.softGrey,
            },
          },
        },
      ],
    },
  };
}

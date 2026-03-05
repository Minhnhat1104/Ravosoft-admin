// material-ui
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';

export default function ThemeTable(theme: Theme) {
  const customTableVariants = palleteColors?.reduce((prev: any[], color) => {
    const { darker, dark, main, light, lighter } = theme.palette[color];

    prev.push({
      props: { color },
      style: {
        '& .MuiTableCell-root': {
          borderBottom: `1px solid ${light}`,
        },
      },
    });

    prev.push({
      props: { variant: 'bordered' as const, color },
      style: {
        '& .MuiTableCell-root': {
          border: `1px solid ${light}`,
        },
      },
    });

    prev.push({
      props: { variant: 'filled' as const, color },
      style: {
        '& .MuiTableCell-root': {
          background: lighter,
        },
        '& .MuiTableBody-root .MuiTableRow-root:last-child .MuiTableCell-root': {
          borderBottom: 'none',
        },
      },
    });

    prev.push({
      props: { variant: 'striped-row' as const, color },
      style: {
        '& .MuiTableCell-root': {
          borderBottom: main,
        },
        '& .MuiTableRow-root:nth-of-type(even)': {
          background: lighter,
        },
      },
    });

    prev.push({
      props: { variant: 'striped-col' as const, color },
      style: {
        '& .MuiTableCell-root': {
          borderBottom: main,
        },
        '& .MuiTableCell-root:nth-of-type(even)': {
          background: lighter,
        },
      },
    });

    return prev;
  }, []);

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
        ...customTableVariants,
      ],
    },
  };
}

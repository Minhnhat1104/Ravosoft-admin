// material-ui
import { alpha, Theme } from '@mui/material/styles';

import { palleteColors } from '..';

export default function ThemeTable(theme: Theme) {
  const customTableVariants = palleteColors?.reduce((prev: any[], color) => {
    const { darker, dark, main, light, lighter, 100: color100 } = theme.palette[color];

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
          borderBottom: `1px solid ${color100}`,
        },
      },
    });

    prev.push({
      props: { variant: 'striped-row' as const, color },
      style: {
        '& .MuiTableCell-root': {
          borderBottom: 'none',
        },
        '& .MuiTableHead-root .MuiTableRow-root:first-child': {
          background: lighter,
        },
        '& .MuiTableRow-root:nth-of-type(even)': {
          background: lighter,
        },
        '& .MuiTableRow-root:nth-of-type(odd)': {
          background: color100,
        },
      },
    });

    prev.push({
      props: { variant: 'striped-col' as const, color },
      style: {
        '& .MuiTableCell-root': {
          borderBottom: 'none',
        },
        '& .MuiTableCell-root:nth-of-type(odd)': {
          background: lighter,
        },
        '& .MuiTableCell-root:nth-of-type(even)': {
          background: color100,
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
          props: { variant: 'filled' as const },
          style: {
            '& .MuiTableCell-root': {
              background: theme.palette.background.darkGrey,
              borderBottom: theme.border.main,
            },
            '& .MuiTableRow-head': {
              '& .MuiTableCell-head': {
                '&:first-of-type': {
                  borderTopLeftRadius: 8,
                },
                '&:last-of-type': {
                  borderTopRightRadius: 8,
                },
              },
            },
            '& .MuiTableBody-root': {
              '& .MuiTableRow-root:last-of-type': {
                '& .MuiTableCell-root': {
                  '&:first-of-type': {
                    borderBottomLeftRadius: 8,
                  },
                  '&:last-of-type': {
                    borderBottomRightRadius: 8,
                  },
                },
              },
            },
            '& .MuiTableBody-root .MuiTableRow-root:last-child .MuiTableCell-root': {
              borderBottom: 'none',
            },
          },
        },
        {
          props: { variant: 'striped-row' as const },
          style: {
            '& .MuiTableRow-root:nth-of-type(even)': {
              background: theme.palette.background.darkGrey,
            },
          },
        },
        {
          props: { variant: 'striped-col' as const },
          style: {
            '& .MuiTableCell-root:nth-of-type(even)': {
              background: theme.palette.background.darkGrey,
            },
          },
        },
        ...customTableVariants,
      ],
    },
  };
}

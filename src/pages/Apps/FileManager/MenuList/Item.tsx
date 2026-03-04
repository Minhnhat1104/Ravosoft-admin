import * as React from 'react';

import { ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

import { MenuItemConfig } from '.';

type Props = {
  item: MenuItemConfig;
  selected?: boolean;
  onClick?: (key: string) => void;
};

export function Item({ item, selected, onClick }: Props) {
  const theme = useTheme();
  const Icon = item.icon;
  return (
    <ListItemButton
      selected={selected}
      onClick={() => onClick?.(item.value)}
      sx={{
        // borderRadius: 1.5,
        // px: 1.25,
        // py: 1,
        color: selected ? 'primary.main' : 'text.secondary',
        '&.Mui-selected': { bgcolor: theme.palette.primary.lighter },
        '&.Mui-selected:hover': { bgcolor: theme.palette.primary.lighter },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 36,
          color: 'inherit',
        }}
      >
        <Icon sx={{ fontSize: 20 }} />
      </ListItemIcon>

      <ListItemText
        primary={item.label}
        slotProps={{
          primary: {
            sx: {
              fontSize: 14,
            },
          },
        }}
        sx={{
          color: 'inherit',
        }}
      />
    </ListItemButton>
  );
}

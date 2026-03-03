import * as React from 'react';

import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { MenuItemConfig } from '.';

type Props = {
  item: MenuItemConfig;
  selected?: boolean;
  onClick?: (key: string) => void;
};

export function Item({ item, selected, onClick }: Props) {
  return (
    <ListItemButton
      selected={selected}
      onClick={() => onClick?.(item.value)}
      sx={{
        borderRadius: 1.5,
        px: 1.25,
        py: 1,
        '&.Mui-selected': { bgcolor: 'rgba(0, 180, 140, 0.12)' },
        '&.Mui-selected:hover': { bgcolor: 'rgba(0, 180, 140, 0.16)' },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 36,
          color: selected ? 'primary.main' : 'text.secondary',
        }}
      >
        {item.icon}
      </ListItemIcon>

      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: 14,
          fontWeight: selected ? 600 : 500,
        }}
      />
    </ListItemButton>
  );
}

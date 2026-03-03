import React from 'react';

import {
  AndroidOutlined,
  CleaningServicesOutlined,
  CloudOutlined,
  DownloadOutlined,
  FavoriteBorderOutlined,
  GridViewOutlined,
  ImageOutlined,
  LockOutlined,
  MusicNoteOutlined,
  StorageOutlined,
  SwapHorizOutlined,
  VideocamOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { List, MenuItem } from '@mui/material';

import { LabelValue } from '~/types';

import { Item } from './Item';

export interface MenuItemConfig extends LabelValue {
  icon: React.ReactNode;
}

type MenuListProps = {
  activeKey: string;
  onChange: (value: string) => void;
};

export const menuItems: MenuItemConfig[] = [
  { value: 'images', label: 'Images', icon: <ImageOutlined fontSize="small" /> },
  { value: 'music', label: 'Music', icon: <MusicNoteOutlined fontSize="small" /> },
  { value: 'videos', label: 'Videos', icon: <VideocamOutlined fontSize="small" /> },
  { value: 'apks', label: 'APKS', icon: <AndroidOutlined fontSize="small" /> },
  { value: 'downloads', label: 'Downloads', icon: <DownloadOutlined fontSize="small" /> },
  { value: 'favourites', label: 'Favourites', icon: <FavoriteBorderOutlined fontSize="small" /> },
  { value: 'hidden', label: 'Hidden Files', icon: <VisibilityOutlined fontSize="small" /> },
  { value: 'transfer', label: 'Transfer files', icon: <SwapHorizOutlined fontSize="small" /> },
  { value: 'drive', label: 'Google Drive', icon: <CloudOutlined fontSize="small" /> },
  { value: 'ftp', label: 'FTP', icon: <StorageOutlined fontSize="small" /> },
  { value: 'private', label: 'Private Files', icon: <LockOutlined fontSize="small" /> },
  { value: 'deepClean', label: 'Deep Clean', icon: <CleaningServicesOutlined fontSize="small" /> },
  { value: 'more', label: 'More', icon: <GridViewOutlined fontSize="small" /> },
];

const MenuList = ({ activeKey, onChange }: MenuListProps) => {
  return (
    <List sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      {menuItems.map((_item) => (
        <Item key={_item.value} item={_item} selected={_item.value === activeKey} onClick={onChange} />
      ))}
    </List>
  );
};

export default MenuList;

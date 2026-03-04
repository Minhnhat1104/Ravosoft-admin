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
  SvgIconComponent,
  SwapHorizOutlined,
  VideocamOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { List, MenuItem } from '@mui/material';

import { LabelValue } from '~/types';

import { Item } from './Item';

export interface MenuItemConfig extends LabelValue {
  icon: SvgIconComponent;
}

type MenuListProps = {
  activeKey: string;
  onChange: (value: string) => void;
};

export const menuItems: MenuItemConfig[] = [
  { value: 'images', label: 'Images', icon: ImageOutlined },
  { value: 'music', label: 'Music', icon: MusicNoteOutlined },
  { value: 'videos', label: 'Videos', icon: VideocamOutlined },
  { value: 'apks', label: 'APKS', icon: AndroidOutlined },
  { value: 'downloads', label: 'Downloads', icon: DownloadOutlined },
  { value: 'favourites', label: 'Favourites', icon: FavoriteBorderOutlined },
  { value: 'hidden', label: 'Hidden Files', icon: VisibilityOutlined },
  { value: 'transfer', label: 'Transfer files', icon: SwapHorizOutlined },
  { value: 'drive', label: 'Google Drive', icon: CloudOutlined },
  { value: 'ftp', label: 'FTP', icon: StorageOutlined },
  { value: 'private', label: 'Private Files', icon: LockOutlined },
  { value: 'deepClean', label: 'Deep Clean', icon: CleaningServicesOutlined },
  { value: 'more', label: 'More', icon: GridViewOutlined },
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

import { atom } from 'recoil';

import { NavItem } from '~/layouts/SideBar/config';
import { type User } from '~/types';

export const userState = atom<User | null>({
  key: 'userAtom',
  default: null,
});

export const loginPathState = atom<string>({
  key: 'loginPathAtom',
  default: '/home',
});

export const sidebarActiveState = atom<NavItem | null>({
  key: 'sidebarActiveAtom',
  default: null,
});

import { type Theme } from '@mui/material/styles';
import { merge } from 'lodash';

// project import
import ThemeBadge from './Badge';
import ThemeButton from './Button';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(ThemeButton(theme), ThemeBadge(theme));
}

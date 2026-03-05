import { type Theme } from '@mui/material/styles';
import { merge } from 'lodash';

// project import
import ThemeAlert from './Alert';
import ThemeBadge from './Badge';
import ThemeButton from './Button';
import ThemeChip from './Chip';
import ThemeMuiListItemButton from './ListItemButton';
import ThemeTable from './Table';
import ThemeTextField from './TextField';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    ThemeAlert(theme),
    ThemeButton(theme),
    ThemeBadge(theme),
    ThemeTextField(theme),
    ThemeChip(theme),
    ThemeMuiListItemButton(theme),
    ThemeTable(theme)
  );
}

import { type PalettesProps } from '@ant-design/colors';

import { type PresetColor, type ThemeMode } from '~/themes/types/config';
import { type PaletteThemeProps } from '~/themes/types/theme';

import Default from './default';

const Theme = (mode: ThemeMode): PaletteThemeProps => {
  return Default(mode);
};

export default Theme;

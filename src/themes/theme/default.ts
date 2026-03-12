import { type PalettesProps } from '@ant-design/colors';
import { SimplePaletteColorOptions, type PaletteColorOptions } from '@mui/material/styles';

import { type PaletteThemeProps } from '~/themes/types/theme';

import { ThemeMode } from '../types/config';

const getPalleteColors = (mode: ThemeMode, colors: string[], contrastText = '#fff'): SimplePaletteColorOptions => {
  const fullColors = mode === 'light' ? colors : colors?.toReversed();

  return {
    lighter: colors[0],
    light: colors[3],
    main: colors[5],
    dark: colors[6],
    darker: colors[8],
    contrastText,
    50: fullColors[0],
    100: fullColors[1],
    200: fullColors[2],
    300: fullColors[3],
    400: fullColors[4],
    500: fullColors[5],
    600: fullColors[6],
    700: fullColors[7],
    800: fullColors[8],
    900: fullColors[9],
  };
};

// https://m2.material.io/inline-tools/color/
const Default = (mode: ThemeMode): PaletteThemeProps => {
  const primary = [
    '#e0f6f3',
    '#b1e8df',
    '#7bdaca',
    '#38cab4',
    '#00bda3',
    '#00af92',
    '#00a184',
    '#009074',
    '#007f65',
    '#006248',
  ];

  const grey = [
    '#fbfbfb',
    '#f6f6f6',
    '#f1f1f1',
    '#e5e5e5',
    '#c2c2c2',
    '#a4a4a4',
    '#7a7a7a',
    '#666666',
    '#474747',
    '#252525',
  ];

  const red = [
    '#ffebef',
    '#ffcdd4',
    '#f99a9b',
    '#f37174',
    '#ffa5d0',
    '#ff3733',
    '#f72d34',
    '#e41f2d',
    '#d71426',
    '#c80019',
  ];

  const gold = [
    '#fff7e1',
    '#feeab3',
    '#fddc83',
    '#fdc051',
    '#fbc42e',
    '#fabb18',
    '#faad14',
    '#f99b13',
    '#f98a13',
    '#f76b12',
  ];

  const green = [
    '#ecf8e6',
    '#d0eec0',
    '#b0e297',
    '#8dd66b',
    '#71cd47',
    '#53c41a',
    '#42b411',
    '#26a001',
    '#008c00',
    '#006a00',
  ];

  const cyan = [
    '#fdf4f5',
    '#ade4e5',
    '#72d4d5',
    '#13c2c2',
    '#00b4b2',
    '#00a5a1',
    '#009792',
    '#008781',
    '#007770',
    '#005a51',
  ];

  console.log('🚀 ~ mode:', mode);
  return {
    primary: getPalleteColors(mode, primary),
    secondary: getPalleteColors(mode, grey),
    error: getPalleteColors(mode, red),
    warning: getPalleteColors(mode, gold),
    info: getPalleteColors(mode, cyan),
    success: getPalleteColors(mode, green),
    grey: getPalleteColors(mode, grey),
    link: getPalleteColors(mode, primary).main,
  };
};

export default Default;

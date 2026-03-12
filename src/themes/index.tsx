import { ReactNode, useMemo } from 'react';
import React from 'react';

import { CssBaseline, GlobalStyles, StyledEngineProvider } from '@mui/material';
import { createTheme, Theme, ThemeOptions, ThemeProvider, TypographyVariantsOptions } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';

import { configState } from '~/atoms/config';
import { CustomShadowProps, PalleteColor } from '~/themes/types/theme';

import componentsOverride from './overrides';
import { getPaletteInstance } from './palette';
import CustomShadows from './shadows';
import Typography from './typography';

interface ThemeCustomizationProps {
  children: ReactNode;
}

export const palleteColors: PalleteColor[] = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {
  const themeDirection = 'ltr';
  const presetColor = 'default';
  const fontFamily = 'Roboto,sans-serif';
  const { mode } = useRecoilValue(configState);
  const theme: Theme = useMemo<Theme>(() => getPaletteInstance(mode, presetColor), [mode, presetColor]);

  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(
    () => Typography(mode, fontFamily, theme),
    [mode, fontFamily]
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => CustomShadows(theme), [theme]);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024, // 0 <= phone, tablet(vertical) < 1024 <= desktop, tablet(horizontal)
          lg: 1266,
          xl: 1536,
        },
      },
      direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: 48,
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      border: {
        light: `1px solid ${theme.palette.border.light}`,
        main: `1px solid ${theme.palette.border.main}`,
        dark: `1px solid ${theme.palette.border.dark}`,
      },
      typography: {
        ...themeTypography,
      },
    }),
    [themeDirection, theme, themeTypography, themeCustomShadows]
  );

  const themes: Theme = createTheme(themeOptions);

  themes.components = componentsOverride(themes);
  themes.components = {
    ...themes.components,
    MuiImageListItemBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiTypography: {
      ...themes.components?.MuiTypography,
    },
  };

  const setGlobalStyles = (theme: Theme) => (
    <GlobalStyles
      styles={{
        ':root': {
          '--color-primary': theme.palette.primary.main,
          '--color-secondary': theme.palette.secondary.main,
          '--color-success': theme.palette.success.main,
          '--color-warning': theme.palette.warning.main,
          '--color-error': theme.palette.error.main,
          '--color-info': theme.palette.info.main,
          '--color-white': theme.palette.background.paper,
          '--color-border': theme.palette.divider,
          '--color-gray-100': theme.palette.grey[100],
          '--color-gray-200': theme.palette.grey[200],
          '--color-gray-300': theme.palette.grey[300],
          '--color-gray-400': theme.palette.grey[400],
          '--color-gray-500': theme.palette.grey[500],
          '--color-red': theme.palette.error.main,
          '--separator-border': `${theme.palette.divider} !important`,
        },
      }}
    />
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {setGlobalStyles(themes)}
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

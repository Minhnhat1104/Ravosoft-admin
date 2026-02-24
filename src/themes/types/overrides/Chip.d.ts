import '@mui/material/Chip';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    light;
  }
  interface ChipPropsSizeOverrides {
    large;
  }
  interface ChipOwnProps {
    shape?: 'rounded' | 'square';
  }
}

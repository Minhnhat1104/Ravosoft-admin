import React from 'react';

import { SxProps } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import face1 from '~/assets/img/face/face-1.jpg';
import { getUserAvatarSrc } from '~/tools/image';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

interface BaseAvatarProps {
  name: string | undefined;
  src?: string;
  size?: 'small' | 'medium' | 'large' | 'extra-large' | number;
  sx?: SxProps;
}

const sizeMap = {
  small: 26,
  medium: 32,
  large: 40,
  'extra-large': 48,
};

const BaseAvatar = ({ src = face1, name, size = 'medium', sx }: BaseAvatarProps) => {
  return (
    <Avatar
      alt={name}
      src={src}
      sx={{
        width: typeof size === 'number' ? size : sizeMap[size],
        height: typeof size === 'number' ? size : sizeMap[size],
        bgcolor: stringToColor(name || 'Unknown'),
        ...sx,
      }}
    >
      {`${name?.split(' ')?.[0]?.[0] || 'U'} ${name?.split(' ')?.[1]?.[0] || ''}`}
    </Avatar>
  );
};

export default BaseAvatar;

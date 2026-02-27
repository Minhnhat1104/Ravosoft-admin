import React from 'react';

import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useSwiper } from 'swiper/react';

interface MoveButtonProps {
  type: 'next' | 'prev';
}

const MoveButton = ({ type }: MoveButtonProps) => {
  const swiper = useSwiper();

  return (
    <IconButton
      onClick={() => (type === 'next' ? swiper.slideNext() : swiper.slidePrev())}
      size="large"
      sx={{
        position: 'absolute',
        top: '50%',
        ...(type === 'next' ? { right: 20 } : { left: 20 }),
        zIndex: 1,
        transform: 'translateY(-100%)',
      }}
      // shape="rounded"
    >
      {type === 'prev' && <ChevronLeftOutlined />}
      {type === 'next' && <ChevronRightOutlined />}
    </IconButton>
  );
};

export default MoveButton;

import React, { forwardRef, RefObject } from 'react';

import { CloseOutlined, DownloadOutlined, ZoomInOutlined, ZoomOutOutlined } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { t } from 'i18next';
import { SwiperRef, useSwiper } from 'swiper/react';

interface ToolbarProps {
  swiperRef: RefObject<SwiperRef | null>;
  onClose: () => void;
  current: number;
  total: number;
  currentImage: {
    id: string;
    name: string;
    url: string;
  };
}

const Toolbar = ({ swiperRef, onClose, current, total, currentImage }: ToolbarProps, ref: any) => {
  return (
    <Stack
      ref={ref}
      slot="container-start"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ background: '#000', px: 2, height: 68, width: 1 }}
    >
      <Typography variant="h3">{`${current} / ${total}`}</Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          // shape="rounded"
          variant="text"
          color="secondary"
          onClick={() => swiperRef?.current?.swiper?.zoom?.in()}
        >
          <ZoomInOutlined />
        </IconButton>
        <IconButton
          // shape="rounded"
          variant="text"
          color="secondary"
          onClick={() => swiperRef?.current?.swiper?.zoom?.out()}
        >
          <ZoomOutOutlined />
        </IconButton>
        <IconButton
          // shape="rounded"
          variant="text"
          color="secondary"
          onClick={() => {
            const link = document.createElement('a');
            link.href = currentImage?.url;
            link.download = currentImage?.name; // download name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <DownloadOutlined />
        </IconButton>
        <IconButton
          // shape="rounded"
          variant="text"
          color="secondary"
          onClick={onClose}
        >
          <CloseOutlined />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default forwardRef(Toolbar);

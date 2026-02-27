import React, { CSSProperties, useState, useRef } from 'react';

import { Backdrop, Box, Portal } from '@mui/material';
import { Stack } from '@mui/material';
import { Zoom, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import MoveButton from './MoveButton';
import Toolbar from './Toolbar';
import 'swiper/swiper-bundle.css';
// import 'swiper/css/pagination';
import './swiper-custom.css';
interface SwiperModalProps {
  items: {
    id: string;
    name: string;
    url: string;
  }[];
  activeId: string;
  isOpen: boolean;
  onClose: () => void;
}

const SwiperModal = ({ items, isOpen, onClose, activeId }: SwiperModalProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);

  const initIndex = items?.findIndex((_item) => _item?.id === activeId);

  return (
    <Portal>
      <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} open={isOpen}>
        <Stack width={1} height={1}>
          <Toolbar
            swiperRef={swiperRef}
            current={current}
            total={total}
            onClose={onClose}
            currentImage={items?.[current - 1]}
          />
          <Box
            ref={swiperRef}
            component={Swiper}
            style={
              {
                width: '100%',
                flex: 1,
                minHeight: 0,
                // '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              } as CSSProperties
            }
            initialSlide={initIndex}
            zoom={{ toggle: false }}
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Zoom, Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => setTotal(swiper.slides.length)}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex + 1)}
            sx={{
              '& .swiper-zoom-container': {
                cursor: 'grab',
              },

              '& .swiper-zoom-container:active': {
                cursor: 'grabbing',
              },
            }}
          >
            {items?.map((_item) => (
              <SwiperSlide key={_item?.id}>
                <div className="swiper-zoom-container">
                  <img
                    alt={_item?.name}
                    src={_item?.url}
                    // style={{
                    //   display: 'block',
                    //   margin: 'auto'
                    // }}
                    style={{
                      display: 'block',
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
            {0 < total && current > 1 && <MoveButton type="prev" />}
            {0 < total && current < total && <MoveButton type="next" />}
          </Box>
        </Stack>
      </Backdrop>
    </Portal>
  );
};

export default SwiperModal;

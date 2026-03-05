import React, { useState } from 'react';

import { Grid } from '@mui/material';

import gallery1 from '~/assets/img/gallery/gallery-1.jpg';
import gallery2 from '~/assets/img/gallery/gallery-2.jpg';
import gallery3 from '~/assets/img/gallery/gallery-3.jpg';
import gallery4 from '~/assets/img/gallery/gallery-4.jpg';
import gallery5 from '~/assets/img/gallery/gallery-5.jpg';
import gallery6 from '~/assets/img/gallery/gallery-6.jpg';
import gallery7 from '~/assets/img/gallery/gallery-7.jpg';
import gallery8 from '~/assets/img/gallery/gallery-8.jpg';
import SwiperModal from '~/components/SwiperModal';

const images: {
  id: string;
  name: string;
  url: string;
}[] = [
  {
    id: 'gallery1',
    name: 'gallery1',
    url: gallery1,
  },
  {
    id: 'gallery2',
    name: 'gallery2',
    url: gallery2,
  },
  {
    id: 'gallery3',
    name: 'gallery3',
    url: gallery3,
  },
  {
    id: 'gallery4',
    name: 'gallery4',
    url: gallery4,
  },
  {
    id: 'gallery5',
    name: 'gallery5',
    url: gallery5,
  },
  {
    id: 'gallery6',
    name: 'gallery6',
    url: gallery6,
  },
  {
    id: 'gallery7',
    name: 'gallery7',
    url: gallery7,
  },
  {
    id: 'gallery8',
    name: 'gallery8',
    url: gallery8,
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState('');
  return (
    <>
      <Grid container spacing={3} p={2} pt={0}>
        {images?.map((_item) => (
          <Grid key={_item.id} size={{ xs: 12, sm: 4, md: 3 }}>
            <img
              src={_item.url}
              style={{ width: '100%', height: 200, borderRadius: 8, cursor: 'pointer' }}
              onClick={() => setActiveImage(_item?.id)}
            />
          </Grid>
        ))}
      </Grid>

      {!!activeImage && (
        <SwiperModal isOpen={!!activeImage} onClose={() => setActiveImage('')} activeId={activeImage} items={images} />
      )}
    </>
  );
};

export default Gallery;

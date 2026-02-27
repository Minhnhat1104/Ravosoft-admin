import React from 'react';

import { Grid } from '@mui/material';

import gallery1 from '~/assets/img/gallery/gallery-1.jpg';
import gallery2 from '~/assets/img/gallery/gallery-2.jpg';
import gallery3 from '~/assets/img/gallery/gallery-3.jpg';
import gallery4 from '~/assets/img/gallery/gallery-4.jpg';
import gallery5 from '~/assets/img/gallery/gallery-5.jpg';
import gallery6 from '~/assets/img/gallery/gallery-6.jpg';
import gallery7 from '~/assets/img/gallery/gallery-7.jpg';
import gallery8 from '~/assets/img/gallery/gallery-8.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const Gallery = () => {
  return (
    <Grid container spacing={3}>
      {images?.map((_url) => (
        <Grid key={_url} size={{ xs: 12, sm: 4, md: 3 }}>
          <img key={_url} src={_url} style={{ width: '100%', height: 200, borderRadius: 8 }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;

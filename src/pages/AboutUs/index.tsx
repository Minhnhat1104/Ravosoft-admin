import React from 'react';

import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import meeting from '~/assets/img/meeting.jpg';

const AboutUs = () => {
  return (
    <Container sx={{ mx: 'auto' }}>
      <Stack
        sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: '80%', mx: 'auto', px: 2 }}
      >
        <Typography variant="h1" sx={{ fontSize: 46, fontWeight: 500, mb: 3 }}>
          Hello! This is Nowa.
        </Typography>
        <Typography sx={{ fontSize: 25, mb: 2, fontWeight: 500 }}>
          Majority have suffered alteration in some form.
        </Typography>
        <Typography sx={{ fontSize: 16, mb: 2, textAlign: 'center' }}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected
          humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
          Lorem Ipsum you are going to use a passage of Lorem Ipsum
        </Typography>
      </Stack>

      <Box component="img" src={meeting} sx={{ borderRadius: 1 }} />
    </Container>
  );
};

export default AboutUs;

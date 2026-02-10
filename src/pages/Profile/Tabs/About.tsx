import React from 'react';

import { Stack, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

const About = () => {
  return (
    <CustomCard sx={{ p: 2.5 }} spacing={2}>
      {/* Section 1 */}
      <Stack spacing={2} sx={{ fontWeight: 500 }}>
        <Typography variant="h4" sx={{ fontSize: 15, fontWeight: 'inherit' }}>
          BIOdata
        </Typography>
        <Typography sx={{ fontWeight: 'inherit' }}>
          Hi I'm Teri Dactyl,has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
          rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
          tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim.
        </Typography>
        <Typography color="primary" sx={{ fontWeight: 'inherit' }}>
          Lead designer / Developer
        </Typography>
        <Typography sx={{ fontWeight: 'inherit' }}>websitename.com</Typography>
      </Stack>
      {/* Section 2 */}
      <Stack spacing={2}>
        <Typography sx={{ fontWeight: 500 }}>2010-2015</Typography>
        <Typography color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Typography>
        <Typography color="primary" sx={{ fontWeight: 500 }}>
          Senior Graphic Designer
        </Typography>
      </Stack>
      <Typography>coderthemes.com</Typography>

      {/* Section 3 */}
      <Stack spacing={2}>
        <Typography sx={{ fontWeight: 500 }}>2007-2009</Typography>
        <Typography color="text.secondary" sx={{ fontSize: 13 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Typography>
      </Stack>
    </CustomCard>
  );
};

export default About;

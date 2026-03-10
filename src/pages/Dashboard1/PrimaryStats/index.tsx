import React from 'react';

import {
  CardGiftcardOutlined,
  DescriptionOutlined,
  FileOpenOutlined,
  GifOutlined,
  Layers,
  RepeatOutlined,
  ShieldOutlined,
} from '@mui/icons-material';
import { Grid } from '@mui/material';

import Item from './Item';


const PrimaryStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item label={'Total Sales'} themeColor={'warning'} icon={DescriptionOutlined} value={48988078} percent={22} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item
          label={'Total Sales Return'}
          themeColor={'success'}
          icon={RepeatOutlined}
          value={16478145}
          percent={-22}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item
          label={'Total Purchase'}
          themeColor={'secondary'}
          icon={CardGiftcardOutlined}
          value={24145789}
          percent={22}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item label={'Total Sales Return'} themeColor={'info'} icon={ShieldOutlined} value={18458747} percent={22} />
      </Grid>
    </Grid>
  );
};

export default PrimaryStats;

import React from 'react';

import {
  DescriptionOutlined,
  DonutSmallOutlined,
  FileOpenOutlined,
  Layers,
  NumbersOutlined,
  PieChartOutline,
  ScheduleOutlined,
} from '@mui/icons-material';
import { Grid, SxProps } from '@mui/material';

import Item from './Item';


interface SecondaryStatsProps {
  sx?: SxProps;
}

const SecondaryStats = ({ sx }: SecondaryStatsProps) => {
  return (
    <Grid container spacing={3} sx={sx}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item label={'Profit'} value={8458798} percent={35} icon={Layers} iconColor="info" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item label={'Invoice Due'} value={4898878} percent={35} icon={PieChartOutline} iconColor="info" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item label={'Total Expenses'} value={8980097} percent={41} icon={DonutSmallOutlined} iconColor="info" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Item label={'Total Payment Returns'} value={78458798} percent={-20} icon={NumbersOutlined} iconColor="info" />
      </Grid>
    </Grid>
  );
};

export default SecondaryStats;

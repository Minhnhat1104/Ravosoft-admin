import React from 'react';

import {
  CancelOutlined,
  Check,
  CheckCircleOutline,
  CheckOutlined,
  CloseOutlined,
  InfoOutline,
  SvgIconComponent,
  WarningAmberOutlined,
  WarningOutlined,
} from '@mui/icons-material';
import { Alert, Grid, Stack } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { palleteColors } from '~/themes';
import { PalleteColor } from '~/themes/types/theme';

interface AlertPageProps {}

const icons: Record<PalleteColor, SvgIconComponent> = {
  primary: InfoOutline,
  secondary: CancelOutlined,
  error: CancelOutlined,
  warning: WarningAmberOutlined,
  info: InfoOutline,
  success: CheckCircleOutline,
};

const AlertPage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Alert">
            <Stack spacing={2}>
              {palleteColors?.map((_color) => (
                <Alert key={_color} severity={_color} variant="filled">
                  {`This is a filled ${_color} Alert.`}
                </Alert>
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Outlined Alert">
            <Stack spacing={2}>
              {palleteColors?.map((_color) => (
                <Alert key={_color} severity={_color} variant="outlined">
                  {`This is a filled ${_color} Alert.`}
                </Alert>
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Border Alert">
            <Stack spacing={2}>
              {palleteColors?.map((_color) => (
                <Alert key={_color} severity={_color} variant="border">
                  {`This is a filled ${_color} Alert.`}
                </Alert>
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Standard Alert">
            <Stack spacing={2}>
              {palleteColors?.map((_color) => (
                <Alert key={_color} severity={_color} variant="standard">
                  {`This is a filled ${_color} Alert.`}
                </Alert>
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Alert with icon">
            <Stack spacing={2}>
              {palleteColors?.map((_color) => {
                const Icon = icons[_color];
                return (
                  <Alert key={_color} icon={<Icon fontSize="inherit" />} severity={_color} variant="standard">
                    {`This is a filled ${_color} Alert.`}
                  </Alert>
                );
              })}
            </Stack>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AlertPage;

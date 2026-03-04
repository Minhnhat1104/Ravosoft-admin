import { Box, Card, Grid, Typography, useTheme } from '@mui/material';
import { IconType } from 'react-icons';

import CustomCard from '~/components/CustomCard';
import { GRID_CARD_SPACING } from '~/config/constants';
import { PalleteColor } from '~/themes/types/theme';

export type FileItem = {
  label: string;
  size: string;
  icon: IconType;
  color: PalleteColor;
};

type Props = {
  items: FileItem[];
};

export default function AllFiles({ items }: Props) {
  const theme = useTheme();
  return (
    <Box mb={4}>
      <Typography mb={2} color="text.secondary">
        All Files
      </Typography>

      <Grid container spacing={GRID_CARD_SPACING}>
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <Grid key={i} size={{ xs: 6, md: 3 }}>
              <CustomCard
                key={i}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Icon size={22} color={theme.palette[item.color].main} />
                  <Typography>{item.label}</Typography>
                </Box>

                <Typography color="text.secondary">{item.size}</Typography>
              </CustomCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

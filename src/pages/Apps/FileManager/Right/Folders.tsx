import { Box, Card, Checkbox, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { IconType } from 'react-icons';
import { FaFolder, FaFilePdf, FaFileWord, FaImage } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

import CustomCard from '~/components/CustomCard';
import { GRID_CARD_SPACING } from '~/config/constants';

type FolderItem = {
  name: string;
  size: string;
  icon: IconType;
};

interface FoldersProps {
  items: FolderItem[];
}

function Folders({ items }: FoldersProps) {
  const theme = useTheme();
  return (
    <Box>
      <Typography mb={2} color="text.secondary">
        Folders
      </Typography>

      <Grid container spacing={GRID_CARD_SPACING}>
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <Grid key={i} size={{ xs: 6, md: 3 }}>
              <CustomCard
                sx={{
                  p: 2,
                  alignItems: 'center',
                }}
              >
                <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
                  <Checkbox size="small" />

                  <IconButton size="small">
                    <HiDotsVertical />
                  </IconButton>
                </Stack>

                <Icon size={60} color={theme.palette.warning.main} />

                <Typography mt={0.5} sx={{ fontWeight: 500 }}>
                  {item.name}
                </Typography>

                <Typography fontSize={13} color="text.secondary">
                  {item.size}
                </Typography>
              </CustomCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Folders;

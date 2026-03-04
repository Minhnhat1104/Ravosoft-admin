import React, { useState } from 'react';

import { AddIcCallOutlined, AddOutlined } from '@mui/icons-material';
import { Button, Divider, Grid, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import MenuList, { menuItems } from './MenuList';
import Storage from './Storage';

const FileManager = () => {
  const [activeKey, setActiveKey] = useState<string>(menuItems[0]?.value);

  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid size={{ xs: 12, md: 3 }}>
        <CustomCard>
          <Button
            fullWidth
            variant="contained"
            startIcon={<AddOutlined />}
            // onClick={onCreateFolder}
            sx={{
              mb: 2,
            }}
          >
            Create Folder
          </Button>

          {/* Section 1: MenuList */}
          <MenuList activeKey={activeKey} onChange={setActiveKey} />

          {/* Section 2: Bottom Section */}
          <Storage usedGB={26.28} totalGB={140} onUpgrade={() => {}} />
        </CustomCard>
      </Grid>

      <Grid size={{ xs: 12, md: 9 }}></Grid>
    </Grid>
  );
};

export default FileManager;

import React, { useState } from 'react';

import { AddIcCallOutlined } from '@mui/icons-material';
import { Button, Divider, Typography } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import MenuList, { menuItems } from './MenuList';
import Storage from './Storage';

const FileManager = () => {
  const [activeKey, setActiveKey] = useState<string>(menuItems[0]?.value);

  return (
    <CustomCard>
      <Typography sx={{ fontSize: 18, fontWeight: 800, letterSpacing: 0.5, mb: 2 }}>FILE MANAGER</Typography>

      <Button
        fullWidth
        variant="contained"
        startIcon={<AddIcCallOutlined />}
        // onClick={onCreateFolder}
        sx={{
          mb: 2,
          borderRadius: 1.5,
          textTransform: 'none',
          fontWeight: 800,
          py: 1.1,
        }}
      >
        CREATE FOLDER
      </Button>

      {/* Section 1: MenuList */}
      <MenuList activeKey={activeKey} onChange={setActiveKey} />

      <Divider sx={{ my: 2 }} />

      {/* Section 2: Bottom Section */}
      <Storage usedGB={26.28} totalGB={140} onUpgrade={() => {}} />
    </CustomCard>
  );
};

export default FileManager;

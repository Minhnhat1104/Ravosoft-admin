import React, { useState } from 'react';

import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

import CustomCard from '~/components/CustomCard';

import MenuList, { menuItems } from './MenuList';
import Storage from './Storage';

const Left = () => {
  const [activeKey, setActiveKey] = useState<string>(menuItems[0]?.value);

  return (
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
  );
};

export default Left;

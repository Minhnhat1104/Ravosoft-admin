import React, { useRef } from 'react';

import { Box, SxProps } from '@mui/material';
import { Allotment, AllotmentHandle } from 'allotment';

import { LOCAL_STORAGE_KEY, localStorageService } from '~/tools/storages';

const PANE_CONTAINER_STYLES: SxProps = {
  height: '100%',
  overflow: 'visible',
};

const SPLIT_DEFAULT_SIZE_PERCENT = 20; // precent
const SPLIT_MIN_SIZE = 200;
const SPLIT_MAX_SIZE = 300;

interface SplitViewProps {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
}

const SplitView = (props: SplitViewProps) => {
  const { leftPane, rightPane } = props;

  const allotmentRef = useRef<AllotmentHandle>(null);

  let leftDefaultSize = 240;
  const lsValue = localStorageService.get(LOCAL_STORAGE_KEY.SIDEBAR_WIDTH);
  if (Number(lsValue)) {
    try {
      leftDefaultSize = Number(lsValue);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Allotment
        ref={allotmentRef}
        onDragEnd={(sizes: number[]) => {
          localStorageService.set(LOCAL_STORAGE_KEY.SIDEBAR_WIDTH, JSON.stringify(sizes));
        }}
        separator
      >
        <Allotment.Pane minSize={SPLIT_MIN_SIZE} maxSize={SPLIT_MAX_SIZE} preferredSize={leftDefaultSize}>
          <Box sx={{ ...PANE_CONTAINER_STYLES }}>{leftPane}</Box>
        </Allotment.Pane>

        <Allotment.Pane minSize={0}>
          <Box sx={{ ...PANE_CONTAINER_STYLES }}>{rightPane}</Box>
        </Allotment.Pane>
      </Allotment>
    </Box>
  );
};

export default SplitView;

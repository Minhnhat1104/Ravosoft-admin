import * as React from 'react';

import { Stack, SxProps } from '@mui/material';
import { Tree } from 'react-arborist';
import useResizeObserver from 'use-resize-observer';

import { sidebarItems } from './config';
import Node from './Node';

export const SIDEBAR_INDENT = 20;

interface NestedListProps {
  sx: SxProps;
}

export default function NestedList({ sx }: NestedListProps) {
  const { ref, width, height } = useResizeObserver();

  return (
    <Stack className="parent" ref={ref} sx={sx}>
      <Tree
        initialData={sidebarItems}
        openByDefault={true}
        width={width}
        height={height}
        indent={16}
        rowHeight={36}
        overscanCount={1}
        padding={20}
      >
        {Node}
      </Tree>
    </Stack>
  );
}

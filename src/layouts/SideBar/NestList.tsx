import * as React from 'react';

import { Stack, SxProps } from '@mui/material';
import { Tree } from 'react-arborist';
import { useLocation } from 'react-router-dom';
import useResizeObserver from 'use-resize-observer';

import { isNavCollapse, isNavGroup, sidebarItems } from './config';
import { getBreadcrumbItems } from './helper';
import Node from './Node';

export const SIDEBAR_INDENT = 20;

interface NestedListProps {
  sx: SxProps;
}

export default function NestedList({ sx }: NestedListProps) {
  const { ref, width, height } = useResizeObserver();
  const { pathname } = useLocation();

  const initialOpenState = React.useMemo(() => {
    // add breadcrum items
    const openItems = getBreadcrumbItems(pathname)?.reduce((prev: any, current, i) => {
      if (isNavCollapse(current)) {
        prev[current?.id || ''] = true;
      }
      return prev;
    }, {});

    // add group items
    sidebarItems?.forEach((_item) => {
      if (isNavGroup(_item)) {
        openItems[_item?.id] = true;
      }
    });

    return openItems;
  }, []);

  return (
    <Stack ref={ref} sx={sx}>
      <Tree
        initialData={sidebarItems}
        openByDefault={false}
        width={width}
        height={height}
        indent={16}
        rowHeight={36}
        overscanCount={1}
        padding={20}
        initialOpenState={initialOpenState}
      >
        {Node}
      </Tree>
    </Stack>
  );
}

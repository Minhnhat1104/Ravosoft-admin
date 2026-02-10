import React, { useMemo, useRef } from 'react';

import { Allotment, AllotmentHandle } from 'allotment';

import { LOCAL_STORAGE_KEY, localStorageService } from '~/tools/storages';

const LEFT_DEFAULT_SIZE = 240;
const LEFT_MIN_SIZE = 200;
const LEFT_MAX_SIZE = 300;

interface SplitViewProps {
  leftPane: React.ReactNode;
  rightPane: React.ReactNode;
}

const SplitView = (props: SplitViewProps) => {
  const { leftPane, rightPane } = props;

  const allotmentRef = useRef<AllotmentHandle>(null);

  const leftDefaultSize = useMemo(() => {
    let leftSize = LEFT_DEFAULT_SIZE;
    const lsValue = localStorageService.get(LOCAL_STORAGE_KEY.SIDEBAR_WIDTH);
    if (Number(lsValue)) {
      leftSize = Number(lsValue);
    }

    return leftSize;
  }, []);

  return (
    <Allotment
      ref={allotmentRef}
      onDragEnd={(sizes: number[]) => {
        localStorageService.set(LOCAL_STORAGE_KEY.SIDEBAR_WIDTH, sizes[0]?.toString());
      }}
      separator
    >
      <Allotment.Pane minSize={LEFT_MIN_SIZE} maxSize={LEFT_MAX_SIZE} preferredSize={leftDefaultSize}>
        {leftPane}
      </Allotment.Pane>

      <Allotment.Pane>{rightPane}</Allotment.Pane>
    </Allotment>
  );
};

export default SplitView;

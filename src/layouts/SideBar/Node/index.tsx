import { CircleOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Stack, SxProps, Typography, useTheme } from '@mui/material';
import { NodeRendererProps } from 'react-arborist';
import { useNavigate } from 'react-router-dom';

import { isNavCollapse, isNavGroup, isNavLeaf, NavItem } from '../config';
import { SIDEBAR_INDENT } from '../NestList';

const Node = ({ node, style, dragHandle }: NodeRendererProps<NavItem>) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const nodeData = node?.data;

  const navItemSx: SxProps = {
    pr: 2,
    cursor: 'pointer',
    height: 1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  };

  if (isNavGroup(nodeData)) {
    return (
      <Stack
        direction="row"
        alignItems="center"
        style={style}
        ref={dragHandle}
        sx={{ ml: `${SIDEBAR_INDENT}px`, pr: 2, height: 1 }}
      >
        <Typography
          color="text.secondary"
          sx={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.065rem' }}
        >
          {nodeData.label}
        </Typography>
      </Stack>
    );
  } else if (isNavCollapse(nodeData)) {
    const Icon = nodeData?.icon;

    return (
      <Stack
        direction="row"
        alignItems="center"
        style={style}
        ref={dragHandle}
        onClick={() => {
          if (nodeData?.type === 'collapse') {
            node.toggle();
          }
        }}
        sx={navItemSx}
      >
        {Icon ? <Icon sx={{ fontSize: 18, mr: 1 }} /> : <CircleOutlined sx={{ fontSize: 6, mr: 1 }} />}
        <Typography sx={{ fontSize: 14 }}> {nodeData.label}</Typography>

        {node?.children && (
          <Stack sx={{ ml: 'auto' }}>
            {node?.isOpen ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
          </Stack>
        )}
      </Stack>
    );
  } else if (isNavLeaf(nodeData)) {
    return (
      <Stack
        direction="row"
        alignItems="center"
        style={style}
        ref={dragHandle}
        onClick={() => {
          navigate(nodeData?.url || '');
        }}
        sx={navItemSx}
      >
        <CircleOutlined sx={{ fontSize: 6, mr: 1 }} />
        <Typography sx={{ fontSize: 14 }}> {nodeData.label}</Typography>

        {node?.children && (
          <Stack sx={{ ml: 'auto' }}>
            {node?.isOpen ? <ExpandLess sx={{ fontSize: 14 }} /> : <ExpandMore sx={{ fontSize: 14 }} />}
          </Stack>
        )}
      </Stack>
    );
  } else {
    return <></>;
  }
};

export default Node;

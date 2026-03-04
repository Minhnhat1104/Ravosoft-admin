import { Box, Button, LinearProgress, Typography } from '@mui/material';

type StorageProps = {
  usedGB: number;
  totalGB: number;
  onUpgrade?: () => void;
};

function Storage({ usedGB, totalGB, onUpgrade }: StorageProps) {
  const percent = Math.min(100, Math.max(0, (usedGB / totalGB) * 100));

  return (
    <Box sx={{ mt: 4 }}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, mb: 1 }}>Storage</Typography>

      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: 6,
          borderRadius: 999,
          bgcolor: 'rgba(0,0,0,0.06)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 999,
          },
        }}
      />

      <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 0.75 }}>
        {usedGB.toFixed(2)} GB Used of {totalGB}GB
      </Typography>

      <Button
        variant="text"
        onClick={onUpgrade}
        sx={{
          mt: 0.5,
          px: 0,
          minWidth: 0,
          textTransform: 'none',
          fontWeight: 700,
        }}
      >
        Upgrade Storage
      </Button>
    </Box>
  );
}

export default Storage;

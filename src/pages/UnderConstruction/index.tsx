import { Button, ButtonGroup, InputAdornment, InputBase, Stack, TextField, Typography, useTheme } from '@mui/material';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';

import { CENTER_BOX_PADDING } from '~/config/constants';

const targetDate = new Date('2026-12-31T23:59:59');

export default function UnderConstruction() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        background: theme.palette.background.paper,
        p: CENTER_BOX_PADDING,
        borderRadius: 3,
        width: 1,
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" sx={{ fontSize: 26, mb: 1, fontWeight: 500 }}>
        Under Maintenance
      </Typography>
      <Typography color="text.secondary" sx={{ fontSize: 13, mb: 2, textAlign: 'center' }}>
        Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your
        patience!
      </Typography>
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span>We are back!</span>;
          }

          return (
            <div style={{ display: 'flex', gap: 24 }}>
              <TimeBox label="Days" value={days} />
              <TimeBox label="Hours" value={hours} />
              <TimeBox label="Minutes" value={minutes} />
              <TimeBox label="Seconds" value={seconds} />
            </div>
          );
        }}
      />

      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
        sx={{ border: theme.border.main, mt: 6, width: 1 }}
      >
        <InputBase placeholder="Enter your Email" sx={{ flex: 1, minWidth: 0, borderTopRightRadius: 0, px: 1.5 }} />

        <Button
          variant="contained"
          sx={{ height: 1 }}
          onClick={() => {
            navigate('/home');
          }}
        >
          Subscribe
        </Button>
      </ButtonGroup>
    </Stack>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        background: theme.palette.primary.main,
        borderRadius: 2,
        color: theme.palette.common.white,
        py: 0.74,
        px: 2.25,
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: 12, opacity: 0.7, mb: 0.5 }}>{label}</Typography>
      <Typography sx={{ fontSize: 21, fontWeight: 500 }}>{value}</Typography>
    </Stack>
  );
}

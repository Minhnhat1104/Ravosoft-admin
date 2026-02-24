import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Chip, Stack, Typography, Button } from '@mui/material';

import { PalleteColor } from '~/themes/types/theme';

type ActivityItem = {
  date: string;
  description: string;
  status?: { label: string; color: PalleteColor };
  time?: string;
};

const activities: ActivityItem[] = [
  {
    date: 'Monday, Jan 1, 2023',
    description: 'Meeting with a client about new project requirement.',
    time: '12:00PM - 1:00PM',
  },
  {
    date: 'Thursday, Dec 29, 2022',
    description: 'Birthday party of niha suka',
    status: { label: 'Completed', color: 'success' },
  },
  {
    date: 'Wednesday, Jan 3, 2023',
    description: 'Work taget for new project is completing',
    status: { label: 'Reminder', color: 'warning' },
  },
  {
    date: 'Friday, Jan 20, 2023',
    description: 'Watch new movie with family',
    time: '06:00PM - 09:00PM',
  },
  {
    date: 'Saturday, Jan 07, 2023',
    description: 'Last day to pay the electricity bill and water bill.need to check the bank details.',
    status: { label: 'Due Date', color: 'error' },
  },
];

function StatusChip({ status, time }: { status?: { label: string; color: PalleteColor }; time?: string }) {
  if (time) return <Chip size="small" label={time} variant="light" color="secondary" />;

  if (!status) return null;

  return <Chip size="small" label={status.label} variant="light" color={status.color} />;
}

export default function ActivitySection() {
  return (
    <Box>
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography fontWeight={700}>Activity :</Typography>
        <Button size="small" sx={{ textTransform: 'none' }}>
          View All
        </Button>
      </Stack>

      {/* Timeline */}
      <Stack spacing={3}>
        {activities.map((item, index) => (
          <Stack key={index} direction="row" spacing={2}>
            {/* timeline dot + line */}
            <Box
              sx={{
                position: 'relative',
                mt: '6px',
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 10, color: '#5EC7C2' }} />

              {index !== activities.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 2,
                    height: 'calc(100% + 16px)',
                    bgcolor: '#E0E0E0',
                  }}
                />
              )}
            </Box>

            {/* content */}
            <Box sx={{ flex: 1 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight={600}>{item.date}</Typography>
                <StatusChip status={item.status} time={item.time} />
              </Stack>

              <Typography variant="body2" color="text.secondary" mt={0.5}>
                {item.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

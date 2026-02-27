import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
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
      <Timeline
        sx={{
          p: 0,
          m: 0,
          '& .MuiTimelineItem-root:before': { flex: 0, padding: 0 }, // bỏ khoảng trống bên trái mặc định
        }}
      >
        {activities.map((item, index) => (
          <TimelineItem key={`${item.date}-${index}`} sx={{ minHeight: 'auto' }}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  p: 0,
                  m: 0,
                  boxShadow: 'none',
                  bgcolor: 'transparent',
                }}
              >
                {/* dot giống FiberManualRecordIcon */}
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: '#5EC7C2',
                  }}
                />
              </TimelineDot>

              {index !== activities.length - 1 && <TimelineConnector sx={{ bgcolor: '#E0E0E0', width: 2 }} />}
            </TimelineSeparator>

            <TimelineContent sx={{ pt: 0, pb: 0, pr: 0 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Typography fontWeight={600}>{item.date}</Typography>

                <Stack direction="row" spacing={1}>
                  {item?.time && <Chip size="small" label={item.time} variant="light" color="secondary" />}

                  {item?.status && (
                    <Chip size="small" label={item.status.label} variant="light" color={item.status.color} />
                  )}
                </Stack>
              </Stack>

              <Typography variant="body2" color="text.secondary" mt={0.5}>
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

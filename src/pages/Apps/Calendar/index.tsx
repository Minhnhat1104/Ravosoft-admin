import { useEffect, useMemo, useRef, useState } from 'react';

import { EventInput } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { alpha, Box, Button, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { PalleteColor } from '~/themes/types/theme';

import ActivitySection from './ActivitySecion';
import { calendarSx } from './style';

type ExternalItem = {
  id: string;
  title: string;
  colorKey: PalleteColor;
  duration?: string; // ISO-ish duration như "01:00" (1h) hoặc để undefined
};

export default function Calendar() {
  const theme = useTheme();
  const externalRef = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<FullCalendar | null>(null);

  const [events, setEvents] = useState<EventInput[]>([{ id: 'e1', title: 'Existing event', start: new Date() }]);

  const externalItems: ExternalItem[] = [
    { id: 'cat_calendar', title: 'Calendar Events', colorKey: 'success' },
    { id: 'cat_birthday', title: 'Birthday Events', colorKey: 'secondary' },
    { id: 'cat_holiday', title: 'Holiday Calendar', colorKey: 'info' },
    { id: 'cat_office', title: 'Office Events', colorKey: 'primary' },
    { id: 'cat_other', title: 'Other Events', colorKey: 'warning' },
    { id: 'cat_festival', title: 'Festival Events', colorKey: 'error' },
    { id: 'cat_timeline', title: 'Timeline Events', colorKey: 'info' },
  ];

  // Biến danh sách ngoài thành "draggable"
  useEffect(() => {
    if (!externalRef.current) return;

    const draggable = new Draggable(externalRef.current, {
      itemSelector: '.fc-external-event',
      eventData: (el) => {
        // Lấy data-* từ element để tạo event
        const id = el.getAttribute('data-id') || crypto.randomUUID();
        const title = el.getAttribute('data-title') || 'Untitled';
        const bg = el.getAttribute('data-bg') || theme.palette.primary.main;
        const border = el.getAttribute('data-border') || bg;
        const text = el.getAttribute('data-text') || theme.palette.getContrastText(bg);

        return {
          id,
          title,
          backgroundColor: bg,
          borderColor: border,
          textColor: text,
        };
      },
    });

    return () => draggable.destroy();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      calendarRef.current?.getApi().updateSize();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid size={{ md: 3 }}>
        <CustomCard sx={{ p: 2 }}>
          <Button variant="text" sx={{ mb: 1 }}>
            Create new Event
          </Button>

          <Stack ref={externalRef} spacing={1}>
            {externalItems.map((_item) => {
              const bg = theme.palette[_item.colorKey].main;
              const text = theme.palette.common.white;

              return (
                <Box
                  key={_item.id}
                  className="fc-external-event"
                  data-id={_item.id}
                  data-title={_item.title}
                  data-bg={bg}
                  data-border={alpha(bg, 0.9)}
                  data-text={text}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 1.5,
                    bgcolor: bg,
                    color: text,
                    cursor: 'grab',
                    userSelect: 'none',
                    boxShadow: `0 1px 0 ${theme.palette[_item.colorKey].lighter}`,
                    '&:active': { cursor: 'grabbing' },
                    fontSize: 12,
                  }}
                >
                  {_item.title}
                </Box>
              );
            })}
          </Stack>

          <Divider sx={{ mx: -2, my: 2 }} />

          <ActivitySection />
        </CustomCard>
      </Grid>
      <Grid size={{ md: 9 }}>
        <CustomCard sx={{ p: 2 }}>
          <Box sx={calendarSx}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              editable // cho phép kéo event trong lịch
              droppable // cho phép nhận drop từ ngoài vào
              selectable
              nowIndicator
              events={events}
              // Khi drop từ external list vào calendar
              eventReceive={(info) => {
                const bg = info.event.backgroundColor; // lấy từ eventData lúc drag
                const border = info.event.borderColor;
                const text = info.event.textColor;

                // info.event là event mới vừa được tạo trong calendar
                // Đồng bộ state events để persist UI
                setEvents((prev) => [
                  ...prev,
                  {
                    id: info.event.id,
                    title: info.event.title,
                    start: info.event.start!,
                    end: info.event.end ?? undefined,
                    allDay: info.event.allDay,
                    backgroundColor: bg,
                    borderColor: border,
                    textColor: text,
                  },
                ]);
              }}
              // Khi kéo thả đổi ngày/giờ trong calendar
              eventDrop={(info) => {
                setEvents((prev) =>
                  prev.map((e) =>
                    e.id === info.event.id
                      ? {
                          ...e,
                          start: info.event.start!,
                          end: info.event.end ?? undefined,
                          allDay: info.event.allDay,
                        }
                      : e
                  )
                );
              }}
              // Resize kéo dài event
              eventResize={(info) => {
                setEvents((prev) =>
                  prev.map((e) =>
                    e.id === info.event.id ? { ...e, start: info.event.start!, end: info.event.end ?? undefined } : e
                  )
                );
              }}
            />
          </Box>
        </CustomCard>
      </Grid>
    </Grid>
  );
}

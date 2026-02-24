import { alpha, SxProps, Theme } from '@mui/material';

export const calendarSx: SxProps<Theme> = (theme) => ({
  // Toolbar container
  '& .fc .fc-header-toolbar': {
    mb: 2,
    px: 1.5,
    py: 1,
    borderRadius: 2,
    bgcolor: alpha(theme.palette.primary.main, 0.08),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
  },

  // Title (February 2026)
  '& .fc .fc-toolbar-title': {
    fontSize: 20,
    fontWeight: 500,
    color: theme.palette.text.primary,
  },

  // All buttons
  '& .fc .fc-button': {
    borderRadius: 1,
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 13,
    boxShadow: 'none',
  },

  // Prev/Next/Today buttons (default primary style)
  '& .fc .fc-button-primary': {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },

    '&:disabled': {
      backgroundColor: alpha(theme.palette.primary.main, 0.35),
      borderColor: 'transparent',
      color: theme.palette.primary.contrastText,
    },
  },

  // Active view button (month/week/day đang chọn)
  '& .fc .fc-button-primary:not(:disabled).fc-button-active, & .fc .fc-button-primary:not(:disabled):active': {
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },

  /* ===== Title (February 2026) ===== */
  '& .fc-toolbar-title': {
    fontSize: 22,
    fontWeight: 600,
  },

  /* ===== Day header (Sun Mon Tue) ===== */
  '& .fc-col-header-cell-cushion': {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.text.primary,
  },

  /* ===== Date number in month cells ===== */
  '& .fc-daygrid-day-number': {
    fontSize: 14,
    fontWeight: 400,
    padding: '4px 6px',
  },

  /* ===== Date number in timeGrid header ===== */
  '& .fc-daygrid-day-top': {
    fontSize: 14,
    fontWeight: 500,
  },

  /* ===== Time labels (8am, 9am...) ===== */
  '& .fc-timegrid-slot-label-cushion': {
    fontSize: 13,
  },
});

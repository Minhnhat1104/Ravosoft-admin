import React from 'react';

import { Alert, useTheme } from '@mui/material';
import { toast } from 'react-toastify';

export const useSnackbar = () => {
  const theme = useTheme();
  const enqueueSuccess = (msg: string) => {
    toast.success((t) => (
      <Alert security="success" sx={{ width: 1 }} onClose={() => t?.closeToast()}>
        {msg}
      </Alert>
    ));
  };
  const enqueueError = (msg: string) => {
    toast.error((t) => (
      <Alert severity="error" sx={{ width: 1 }} onClose={() => t?.closeToast()}>
        {msg}
      </Alert>
    ));
  };

  const enqueueWarning = (msg: string) => {
    toast.warning((t) => (
      <Alert severity="warning" sx={{ width: 1 }} onClose={() => t?.closeToast()}>
        {msg}
      </Alert>
    ));
  };

  const enqueueInfo = (msg: string) => {
    toast.info((t) => (
      <Alert severity="info" sx={{ width: 1 }} onClose={() => t?.closeToast()}>
        {msg}
      </Alert>
    ));
  };

  return { enqueueSuccess, enqueueError, enqueueWarning, enqueueInfo };
};

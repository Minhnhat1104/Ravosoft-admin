import React from 'react';

import { Google } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import i18next, { t } from 'i18next';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import BaseAvatar from '~/components/BaseAvatar';
import PasswordInput from '~/components/PasswordInput';
import { BASE_URL, CENTER_BOX_PADDING } from '~/config/constants';
import { useAuthMutation } from '~/hooks/useAuthMutation';
import { useSnackbar } from '~/hooks/useSnackbar';
// import { t } from 'i18next';
import { LangKey } from '~/lang/langKey';

type LockscreenFormData = {
  password: string;
};

function Lockscreen() {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LockscreenFormData>({
    defaultValues: {
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LockscreenFormData> = async (data) => {
    // const res = await mUserLockscreen.mutateAsync(
    //   {
    //     email: data?.email,
    //     password: data?.password,
    //   },
    //   {
    //     onSuccess: (res) => {
    //       if (!res?.data?.rows?.id) {
    //         enqueueError('Invalid Lockscreen response data!');
    //         return;
    //       }
    //       setUser(res?.data?.rows);
    //       navigate(LockscreenPath);
    //     },
    //   }
    // );
    navigate('/home');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Stack
        sx={{
          background: theme.palette.background.paper,
          p: CENTER_BOX_PADDING,
          borderRadius: 3,
          width: 1,
          alignItems: 'center',
        }}
      >
        <BaseAvatar name="Teri Dactyl" size={84} />

        <Typography sx={{ fontSize: 17, mb: 1, mt: 3, fontWeight: 500 }}>Teri Dactyl</Typography>
        <Typography sx={{ color: theme.palette.text.secondary }}>Enter Your Password to View your Screen</Typography>

        <PasswordInput
          fullWidth
          label={t(LangKey.password)}
          helperText={errors.password?.message}
          error={!!errors.password}
          sx={{ mt: 2 }}
          {...register('password', { maxLength: 50 })}
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
          {'Unlock'}
        </Button>
      </Stack>
    </form>
  );
}

export default Lockscreen;

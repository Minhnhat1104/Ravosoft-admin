import React from 'react';

import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { userState } from '~/atoms';
import PasswordInput from '~/components/PasswordInput';
import { CENTER_BOX_PADDING } from '~/config/constants';
import { useAuthMutation } from '~/hooks/useAuthMutation';
import { useSnackbar } from '~/hooks/useSnackbar';
import { LangKey } from '~/lang/langKey';

type ForgetPasswordFormData = {
  email: string;
};

function ForgetPassword() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { mUserForgetPassword } = useAuthMutation();
  const { enqueueError } = useSnackbar();
  const setUser = useSetRecoilState(userState);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ForgetPasswordFormData>();

  const onSubmit: SubmitHandler<ForgetPasswordFormData> = async (data) => {
    // const res = await mUserForgetPassword.mutateAsync(
    //   {
    //     email: data?.email,
    //   },
    //   {
    //     onSuccess: (res) => {
    //       setUser(res?.data?.rows);
    //     },
    //   }
    // );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Stack
        sx={{
          background: theme.palette.background.paper,
          p: CENTER_BOX_PADDING,
          borderRadius: 3,
        }}
        spacing={3}
      >
        <Typography variant="h1" fontWeight={500} textAlign="center">
          {t(LangKey.forgotPassword)}
        </Typography>
        <Typography color="text.secondary" textAlign="center">
          {t(LangKey.resetPasswordInstruction)}
        </Typography>
        <TextField
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email}
          type="email"
          {...register('email', { required: true, maxLength: 50 })}
        />
        <Button type="submit" variant="contained">
          {t(LangKey.resetPassword)}
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          component={Link}
          to={'/pages/sign-in'}
          justifyContent="center"
          color="primary.main"
        >
          <ArrowBack fontSize="small" sx={{ mr: 1 }} />
          <Typography>{t(LangKey.backToLogin)}</Typography>
        </Stack>
      </Stack>
    </form>
  );
}

export default ForgetPassword;

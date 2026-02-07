import React from 'react';

import { Avatar, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { userState } from '~/atoms';
import { CENTER_BOX_PADDING } from '~/config/constants';
import { useUserMutation } from '~/hooks/useUserMutation';
import { LangKey } from '~/lang/langKey';
import { validationRegex } from '~/tools/regexs';

import AvatarWrite from './AvatarWrite';

type ProfileFormData = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
};

function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { mProfileUpdate } = useUserMutation();
  const [user, setUser] = useRecoilState(userState);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: {
      email: user?.email,
      firstName: user?.first_name,
      lastName: user?.last_name,
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<ProfileFormData> = async (data) => {
    // const res = await mProfileUpdate.mutateAsync(
    //   {
    //     email: data?.email,
    //     firstName: data?.firstName,
    //     lastName: data?.lastName,
    //     phone: data?.phone,
    //   },
    //   {
    //     onSuccess: () => {
    //       setUser((prev) =>
    //         prev
    //           ? {
    //               ...prev,
    //               first_name: data?.firstName || '',
    //               last_name: data?.lastName || '',
    //             }
    //           : null
    //       );
    //     },
    //   }
    // );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: 'fit-content', margin: 'auto' }}>
      <Stack
        sx={{
          background: theme.palette.background.paper,
          p: CENTER_BOX_PADDING,
          borderRadius: 3,
          width: 600,
        }}
        spacing={3}
      >
        <Typography variant="h1" fontWeight={500} textAlign="center">
          {t(LangKey.profileSettings)}
        </Typography>

        <AvatarWrite />
        <Grid container spacing={3}>
          <Grid size={6}>
            <TextField
              fullWidth
              size="medium"
              label={t(LangKey.firstName)}
              helperText={errors.firstName?.message}
              error={!!errors.firstName}
              {...register('firstName', { required: true, maxLength: 50 })}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              size="medium"
              label={t(LangKey.lastName)}
              helperText={errors.lastName?.message}
              error={!!errors.lastName}
              {...register('lastName', { required: true, maxLength: 50 })}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          disabled
          size="medium"
          label={t(LangKey.email)}
          helperText={errors.email?.message}
          error={!!errors.email}
          type="email"
          // placeholder="Enter your email"
          {...register('email', {
            required: true,
            pattern: validationRegex.email,
          })}
        />

        {/* <TextField
          fullWidth
          size="medium"
          label="Phone"
          helperText={errors.email?.message}
          error={!!errors.email}
          // placeholder="Enter your email"
          {...register('phone', {
            required: true,
            pattern: validationRegex.phone,
          })}
        /> */}
        <Button type="submit" variant="contained" loading={mProfileUpdate.isPending}>
          {t(LangKey.saveProfile)}
        </Button>
      </Stack>
    </form>
  );
}

export default Profile;

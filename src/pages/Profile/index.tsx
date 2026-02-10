import React from 'react';

import { DirectionsCarFilledOutlined, FlagOutlined } from '@mui/icons-material';
import { Avatar, Button, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { PiIdentificationCardLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import profile from '~/assets/img/face/profile.jpg';
import { userState } from '~/atoms';
import BaseAvatar from '~/components/BaseAvatar';
import CustomCard from '~/components/CustomCard';
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

  return (
    <Stack sx={{ width: 1, p: 2.5 }}>
      <CustomCard sx={{ p: 2.5, flexDirection: 'row', alignItems: 'center' }}>
        <BaseAvatar src={profile} name="Sonya Taylor" sharp="rectangle" size={180} sx={{ mr: 3 }} />

        <Stack sx={{ flex: 1, minWidth: 0, mb: 2 }}>
          <Typography variant="h4">Sonya Taylor</Typography>
          <Stack direction="row" sx={{ alignItems: 'center', color: 'text.secondary' }} spacing={1}>
            <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1}>
              <PiIdentificationCardLight size={14} />
              <Typography>Ui/Ux Developer</Typography>
            </Stack>
            <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1}>
              <DirectionsCarFilledOutlined sx={{ fontSize: 14, color: 'inherit' }} />
              <Typography>West fransisco,Alabama</Typography>
            </Stack>
            <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1}>
              <FlagOutlined sx={{ fontSize: 14, color: 'inherit' }} />
              <Typography>New Jersey</Typography>
            </Stack>
          </Stack>
        </Stack>
      </CustomCard>
    </Stack>
  );
}

export default Profile;

import React, { useState } from 'react';

import {
  DirectionsCarFilledOutlined,
  EmailOutlined,
  FlagOutlined,
  LanguageOutlined,
  Phone,
  PhoneOutlined,
  SvgIconComponent,
} from '@mui/icons-material';
import { Avatar, Button, Divider, Grid, Stack, Tab, Tabs, TextField, Typography, useTheme } from '@mui/material';
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
import { LabelValue } from '~/types';

import AvatarWrite from './AvatarWrite';
import About from './Tabs/About';
type ProfileFormData = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
};

interface Info2 {
  icon: SvgIconComponent;
  label: string;
  value: string;
}

const info2Items: Info2[] = [
  {
    icon: PhoneOutlined,
    label: 'Phone',
    value: '+94 12345 6789',
  },
  {
    icon: EmailOutlined,
    label: 'Email',
    value: 'spruko.space@gmail.com',
  },
  {
    icon: LanguageOutlined,
    label: 'Website',
    value: 'sprukotechnologies',
  },
];

enum ProfileTab {
  About,
  EditProfile,
  Timeline,
  AccountSettings,
}

const tabs: LabelValue<string, ProfileTab>[] = [
  {
    label: 'About',
    value: ProfileTab.About,
  },
  {
    label: 'Edit Profile',
    value: ProfileTab.EditProfile,
  },
  {
    label: 'Timeline',
    value: ProfileTab.Timeline,
  },
  {
    label: 'Account Settings',
    value: ProfileTab.AccountSettings,
  },
];

function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { mProfileUpdate } = useUserMutation();
  const [tab, setTab] = useState<ProfileTab>(ProfileTab.About);

  return (
    <Stack sx={{ width: 1, p: 2.5 }}>
      <CustomCard sx={{ mb: 2.5 }}>
        <Stack direction="row" sx={{ width: 1, alignItems: 'center', p: 2.5 }}>
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

            {/* info2 */}
            <Stack spacing={1} mt={2}>
              {info2Items?.map((_item) => (
                <Stack
                  key={_item?.label}
                  direction="row"
                  sx={{ width: 1, color: theme.palette.text.secondary, alignItems: 'center' }}
                  spacing={0.5}
                >
                  <_item.icon sx={{ fontSize: 14 }} />
                  <Typography sx={{ fontWeight: 500 }}>{`${_item?.label}: `}</Typography>
                  <Typography>{_item?.value}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Divider />

        <Tabs value={tab} onChange={(e, nVal) => setTab(nVal)} aria-label="basic tabs example">
          {tabs?.map((_item) => (
            <Tab key={_item?.value} label={_item?.label} />
          ))}
        </Tabs>
      </CustomCard>

      <About />
    </Stack>
  );
}

export default Profile;

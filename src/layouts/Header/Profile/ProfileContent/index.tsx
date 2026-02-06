import React from 'react';

import { Box, Stack, SxProps, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { userState } from '~/atoms';
import { useAuthMutation } from '~/hooks/useAuthMutation';
import { COOKIE_KEY, cookieService } from '~/tools/storages';

import ActionList from './ActionList';

interface ProfileContentProps {
  sx?: SxProps;
  onAfterClick?: () => void;
}

const ProfileContent = (props: ProfileContentProps) => {
  const { sx, onAfterClick } = props;
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const { mUserLogout } = useAuthMutation();

  const handleLogout = async () => {
    // await mUserLogout.mutateAsync({});
    // setUser(null);
    // cookieService.remove(COOKIE_KEY.REFRESH_TOKEN);
    navigate('/pages/sign-in');
  };

  return (
    <Box sx={sx}>
      {/* <Divider /> */}
      <ActionList handleLogout={handleLogout} onAfterClick={onAfterClick} />
    </Box>
  );
};

export default ProfileContent;

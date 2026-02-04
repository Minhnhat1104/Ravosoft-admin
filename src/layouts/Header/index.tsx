import React, { useState } from 'react';

import { ImageOutlined, UploadOutlined } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { t } from 'i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import NavList from './NavList';
import Profile from './Profile';

import logo from '~/assets/img/favicon.ico';
import { userState } from '~/atoms';
import LanguageSelect from '~/components/LanguageSelect';
import ThemeToggle from '~/components/ThemeToggle';
import { useAuthMutation } from '~/hooks/useAuthMutation';
import { LangKey } from '~/lang/langKey';
import UploadModal from '~/pages/UploadModal';
import { COOKIE_KEY, cookieService } from '~/tools/storages';



interface HeaderProps {
  isLogin?: boolean;
}

function Header({ isLogin }: HeaderProps) {
  const [user, setUser] = useRecoilState(userState);
  const theme = useTheme();
  const [openWrite, setOpenWrite] = useState<boolean>(false);
  const { mUserLogout } = useAuthMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await mUserLogout.mutateAsync({});
    setUser(null);
    cookieService.remove(COOKIE_KEY.REFRESH_TOKEN);
    navigate('/login');
  };

  return (
    <>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: 80,
          // position: 'fixed',
          top: 0,
          zIndex: 1,
          borderBottom: theme.border.light,
        }}
      >
        <Container
          sx={{
            margin: 'auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Stack direction="row" alignItems="center" spacing={1} height={'100%'}>
              <img style={{ width: 40, height: 40 }} src={logo} alt="Logo" />
              <Typography fontWeight="500" fontSize={24}>
                Photohub
              </Typography>
            </Stack>
          </Link>
          {isLogin ? (
            <>
              {/* <NavList /> */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <LanguageSelect />
                <ThemeToggle />
                <Profile />
              </Stack>
            </>
          ) : (
            <Stack direction="row" alignItems="center" spacing={1}>
              <LanguageSelect />
              <ThemeToggle />

              <Button component={Link} variant="contained" to="/login">
                {t(LangKey.join)}
              </Button>
            </Stack>
          )}
        </Container>
      </Box>

      {openWrite && <UploadModal isOpen={openWrite} onClose={() => setOpenWrite(false)} />}
    </>
  );
}

export default Header;

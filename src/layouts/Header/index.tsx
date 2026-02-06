import React, { useState } from 'react';

import { ImageOutlined, SearchOffOutlined, SearchOutlined, UploadOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { t } from 'i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import logo from '~/assets/img/favicon.ico';
import { userState } from '~/atoms';
import LanguageSelect from '~/components/LanguageSelect';
import ThemeToggle from '~/components/ThemeToggle';
import { useAuthMutation } from '~/hooks/useAuthMutation';
import { LangKey } from '~/lang/langKey';
import UploadModal from '~/pages/UploadModal';
import { COOKIE_KEY, cookieService } from '~/tools/storages';

import Profile from './Profile';

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
    navigate('/pages/sign-in');
  };

  return (
    <>
      <Box
        px={2}
        sx={{
          width: '100%',
          height: 64,
          // position: 'fixed',
          top: 0,
          zIndex: 1,
          borderBottom: theme.border.light,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for results"
          size="small"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlined fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          sx={{ mr: 'auto' }}
        />

        {isLogin ? (
          <>
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

            <Button component={Link} variant="contained" to="/pages/sign-in" size="small">
              {t(LangKey.join)}
            </Button>
          </Stack>
        )}
      </Box>

      {openWrite && <UploadModal isOpen={openWrite} onClose={() => setOpenWrite(false)} />}
    </>
  );
}

export default Header;

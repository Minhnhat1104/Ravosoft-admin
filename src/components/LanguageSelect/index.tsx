import { useRef, useState } from 'react';

import { CheckCircle, LanguageOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  ClickAwayListener,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FlagComponent, US, VN } from 'country-flag-icons/react/1x1';
import { US as US3x2, VN as VN3x2 } from 'country-flag-icons/react/3x2';
import i18next from 'i18next';
import { useRecoilValue } from 'recoil';

import { userState } from '~/atoms';
import { LOCAL_STORAGE_KEY, localStorageService } from '~/tools/storages';
import { LabelValue } from '~/types';
// import { FlagComponent, US, VI } from 'country-flag-icons/react/3x2'

interface LanguageOption extends LabelValue {
  countryFlag1x1: FlagComponent;
  countryFlag3x2: FlagComponent;
}

const languageOptions: LanguageOption[] = [
  {
    label: 'English',
    value: 'en',
    countryFlag1x1: US,
    countryFlag3x2: US3x2,
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    countryFlag1x1: VN,
    countryFlag3x2: VN3x2,
  },
];

const LanguageSelect = () => {
  const theme = useTheme();
  const user = useRecoilValue(userState);

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    setOpen(false);
  };

  const langOption = languageOptions?.find((_option) => _option?.value === i18next.language) || languageOptions[0];

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleToggle} size="small">
        <Box
          sx={{
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: 21,
            height: 21,
          }}
        >
          <Box component={langOption.countryFlag1x1} sx={{ width: 21, height: 21 }} />
        </Box>
      </IconButton>

      <Popper open={open} anchorEl={anchorRef?.current} transition placement="bottom-start" sx={{ zIndex: 1 }}>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <List>
                  {languageOptions?.map((_item) => {
                    return (
                      <ListItem disablePadding key={_item?.value} sx={{ minWidth: 200 }}>
                        <ListItemButton
                          onClick={() => {
                            i18next.changeLanguage(_item?.value);
                            localStorageService.set(LOCAL_STORAGE_KEY.LANG, _item?.value);
                            window.location.reload();
                          }}
                          // selected={isActive}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            {/* <Box
                              component={ReactCountryFlag}
                              svg
                              countryCode={_item?.countryFlag}
                              sx={{ fontSize: 20, lineHeight: '20px', maxWidth: 'none', flexShrink: 0 }}
                            /> */}
                            <Box component={_item.countryFlag3x2} sx={{ height: 14 }} />
                          </ListItemIcon>
                          <ListItemText primary={_item.label} />

                          {_item?.value === i18next.language && <CheckCircle fontSize="small" color="success" />}
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Paper>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default LanguageSelect;

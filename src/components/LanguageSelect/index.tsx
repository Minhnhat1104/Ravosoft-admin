import { useRef, useState } from 'react';

import { CheckCircle, LanguageOutlined } from '@mui/icons-material';
import {
  Avatar,
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
import i18next from 'i18next';
import Flag from 'react-world-flags';
import { useRecoilValue } from 'recoil';

import { userState } from '~/atoms';
import { getUserAvatarSrc } from '~/tools/image';
import { LOCAL_STORAGE_KEY, localStorageService } from '~/tools/storages';
import { LabelValue } from '~/types';

interface LanguageOption extends LabelValue {
  countryFlag: string;
}

const languageOptions: LanguageOption[] = [
  {
    label: 'English',
    value: 'en',
    countryFlag: 'us',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    countryFlag: 'vn',
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

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleToggle}>
        <LanguageOutlined />
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
                            <Flag code={_item?.countryFlag} width={20} />
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

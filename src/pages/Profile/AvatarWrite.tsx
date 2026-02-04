import React, { useCallback, useState } from 'react';

import { Edit } from '@mui/icons-material';
import { Avatar, Box, Button, Stack, useTheme } from '@mui/material';
import { t } from 'i18next';
import { useDropzone } from 'react-dropzone';
import { useRecoilState } from 'recoil';


import userImagePlaceholder from '~/assets/img/UserPlaceholder.png';
import { userState } from '~/atoms';
import BaseAvatar from '~/components/BaseAvatar';
import ImageButton from '~/components/ImageButton';
import { useUserMutation } from '~/hooks/useUserMutation';
import { LangKey } from '~/lang/langKey';
import { getUserAvatarSrc } from '~/tools/image';

import AvatarCrop from './AvatarCrop';

function AvatarWrite() {
  const theme = useTheme();
  const [user, setUser] = useRecoilState(userState);
  const { mDeleteAvatar } = useUserMutation();

  const [openAvatarWrite, setOpenAvatarWrite] = useState<{ isOpen: boolean; file: File | null }>({
    isOpen: false,
    file: null,
  });

  const handleDelete = async () => {
    const res = await mDeleteAvatar.mutateAsync(
      {},
      {
        onSuccess(data, variables, context) {
          window.location.reload();
        },
      }
    );
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <img
          src={getUserAvatarSrc(user?.id || '')}
          style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 999 }}
        />

        <ImageButton label={t(LangKey.changeAvatar)} onDrop={(file) => setOpenAvatarWrite({ isOpen: true, file })} />

        <Button
          variant="contained"
          onClick={handleDelete}
          loading={mDeleteAvatar.isPending}
          size="small"
          color="secondary"
        >
          Delete
        </Button>
      </Stack>

      {openAvatarWrite?.isOpen && openAvatarWrite?.file && (
        <AvatarCrop
          isOpen={openAvatarWrite?.isOpen}
          file={openAvatarWrite?.file}
          onClose={() => setOpenAvatarWrite({ isOpen: false, file: null })}
        />
      )}
    </>
  );
}

export default AvatarWrite;

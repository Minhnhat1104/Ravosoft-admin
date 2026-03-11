import React, { useState } from 'react';

import { Box, Grid, InputLabel, Stack, TextField } from '@mui/material';

import CustomCard from '~/components/CustomCard';
import ImageDropZone from '~/components/ImageDropZone';
import { GRID_CARD_SPACING } from '~/config/constants';

import type { FileWithPath } from 'react-dropzone';

const fileInputTypes = [
  { label: 'Default file input example', type: 'file', key: 'default' },
  { label: 'Multiple files input example', type: 'file', multiple: true, key: 'multiple' },
  { label: 'Disabled file input example', type: 'file', disabled: true, key: 'disabled' },
  { label: 'Small file input example', type: 'file', size: 'small' as const, key: 'small' },
  { label: 'Large file input example', type: 'file', size: 'large' as const, key: 'large' }, // No equivalent to bootstrap large file input. Mapping to normal MUI text field since it seems textfield has limited sizes (small/medium)
];

const FileUploadPage = () => {
  const [multipleUpload, setMultipleUpload] = useState<FileWithPath[]>([]);
  const [singleUpload, setSingleUpload] = useState<FileWithPath[]>([]);
  const [dropzoneUpload, setDropzoneUpload] = useState<FileWithPath[]>([]);

  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="BOOTSTRAP FILE INPUT">
            <Stack spacing={GRID_CARD_SPACING}>
              {fileInputTypes?.map((_item) => (
                <Stack key={_item.key}>
                  <InputLabel>{_item?.label}</InputLabel>
                  <TextField
                    type={_item?.type}
                    fullWidth
                    disabled={_item?.disabled}
                    size={_item?.size}
                    slotProps={{
                      input: {
                        multiple: _item?.multiple,
                      } as any, // Mui TextField type mismatch for multiple
                    }}
                  />
                </Stack>
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={GRID_CARD_SPACING}>
            <Grid size={{ xs: 12 }}>
              <CustomCard title="MULTIPLE UPLOAD">
                <ImageDropZone
                  name="multiple"
                  value={multipleUpload}
                  onChange={setMultipleUpload}
                  style={{ height: 124 }}
                />
              </CustomCard>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <CustomCard title="SINGLE UPLOAD">
                <Box display="flex" justifyContent="center">
                  <Box sx={{ width: 150 }}>
                    <ImageDropZone
                      name="single"
                      value={singleUpload}
                      onChange={(files) => setSingleUpload(files.slice(0, 1))}
                      style={{ height: 128, width: 128 }}
                    />
                  </Box>
                </Box>
              </CustomCard>
            </Grid>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <CustomCard title="DROPZONE">
            <ImageDropZone
              name="dropzone"
              value={dropzoneUpload}
              onChange={setDropzoneUpload}
              style={{ height: 124 }}
            />
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FileUploadPage;

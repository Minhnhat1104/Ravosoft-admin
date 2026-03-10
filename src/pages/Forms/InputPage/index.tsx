import React from 'react';

import {
  Chip,
  Grid,
  InputLabel,
  Stack,
  TextField,
  TextFieldPropsSizeOverrides,
  TextFieldVariants,
} from '@mui/material';

import CustomCard from '~/components/CustomCard';
import { GRID_CARD_SPACING } from '~/config/constants';
import { palleteColors } from '~/themes';

interface InputPageProps {}

const inputVariants: TextFieldVariants[] = ['outlined', 'standard', 'filled'];

const inputTypes = [
  { type: 'text', label: 'Type Text', placeholder: 'Text' },
  { type: 'number', label: 'Type Number', placeholder: 'Number' },
  { type: 'password', label: 'Type Password', placeholder: 'Password' },
  { type: 'email', label: 'Type Email', placeholder: 'Email@xyz.com' },
  { type: 'tel', label: 'Type Tel', placeholder: '+1100-2031-1233' },
  { type: 'date', label: 'Type Date', placeholder: 'mm/dd/yyyy' },
  { type: 'week', label: 'Type Week' },
  { type: 'month', label: 'Type Month' },
  { type: 'time', label: 'Type Time' },
  { type: 'datetime-local', label: 'Type datetime-local' },
  { type: 'search', label: 'Type Search', placeholder: 'Search' },
  { type: 'submit', label: 'Type Submit' },
  { label: 'Type File', type: 'file' },
  { label: 'Type Url', type: 'url', placeholder: 'http://example.com' },
  { label: 'Type Disabled', type: 'text', placeholder: 'Disabled input', disabled: true },
  { label: 'Input Readonly Text', type: 'text', placeholder: 'email@example.com', readOnly: true },
  {
    label: 'Disabled Readonly Input',
    type: 'text',
    placeholder: 'Disabled readonly input',
    disabled: true,
    readOnly: true,
  },
  { label: 'Type Readonly Input', type: 'text', placeholder: 'Readonly input here...', readOnly: true },
  { label: 'Textarea', multiline: true },
  { label: 'Datalist example', type: 'search', placeholder: 'Type to search...' },
];

const inputSizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];

const InputPage = () => {
  return (
    <Stack p={2} pt={0} height="100%" className="scroll-box" spacing={2}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 12 }}>
          <CustomCard title="Input Types">
            <Grid container spacing={GRID_CARD_SPACING}>
              {inputVariants?.map((_variant) => (
                <Grid key={_variant} size={{ xs: 12, md: 4 }}>
                  <InputLabel>{_variant?.toSentenceCase()}</InputLabel>
                  <TextField variant={_variant} fullWidth />
                </Grid>
              ))}

              {inputTypes?.map((_item) => (
                <Grid key={_item?.type} size={{ xs: 12, md: 4 }}>
                  <InputLabel>{_item?.label}</InputLabel>
                  <TextField
                    type={_item?.type}
                    placeholder={_item?.placeholder}
                    fullWidth
                    disabled={_item?.disabled}
                    multiline={_item?.multiline}
                    slotProps={{
                      input: {
                        readOnly: _item.readOnly,
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Input Sizing">
            <Stack spacing={GRID_CARD_SPACING}>
              {inputSizes?.map((_size) => (
                <TextField key={_size} placeholder={_size?.toSentenceCase()} size={_size} fullWidth />
              ))}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <CustomCard title="Input Error">
            <Grid container spacing={GRID_CARD_SPACING}>
              {inputVariants?.map((_variant) => (
                <Grid key={_variant} size={{ xs: 12, md: 4 }}>
                  <InputLabel>{`${_variant}`?.toSentenceCase()}</InputLabel>
                  <TextField variant={_variant} fullWidth error />
                </Grid>
              ))}

              {inputVariants?.map((_variant) => (
                <Grid key={_variant} size={{ xs: 12, md: 4 }}>
                  <InputLabel>{`with helper text`?.toSentenceCase()}</InputLabel>
                  <TextField variant={_variant} fullWidth error helperText="Incorrect entry." />
                </Grid>
              ))}
            </Grid>
          </CustomCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default InputPage;

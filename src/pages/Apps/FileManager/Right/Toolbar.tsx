import { Box, Button, TextField, Typography, useTheme } from '@mui/material';

import InputWithButton from '~/components/InputWithButton';

type Props = {
  onSearch?: (value: string) => void;
};

export default function Toolbar({ onSearch }: Props) {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="h5" fontWeight={400}>
        File Manager
      </Typography>

      <InputWithButton placeholder="Search folder....." textButton="Search" sx={{ width: 'calc(50% - 8px)' }} />
    </Box>
  );
}

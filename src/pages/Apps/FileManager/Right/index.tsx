import { Box, Stack } from '@mui/material';
import { FaImage, FaMusic, FaVideo, FaFileAlt } from 'react-icons/fa';
import { FaFolder, FaFilePdf, FaFileWord } from 'react-icons/fa';

import CustomCard from '~/components/CustomCard';

import AllFiles, { FileItem } from './AllFiles';
import Folders from './Folders';
import Toolbar from './Toolbar';

export default function Right() {
  const allFiles: FileItem[] = [
    { label: 'Image', size: '14.2 mb', icon: FaImage, color: 'error' },
    { label: 'Video', size: '212 mb', icon: FaVideo, color: 'info' },
    { label: 'Docs', size: '34 mb', icon: FaFileAlt, color: 'warning' },
    { label: 'Music', size: '1.5 gb', icon: FaMusic, color: 'error' },
  ];

  const folders = [
    { name: 'videos', size: '4.23gb', icon: FaFolder },
    { name: 'Images', size: '1.23gb', icon: FaFolder },
    { name: 'Sea', size: '8.97mb', icon: FaImage },
    { name: 'Downloads', size: '453kb', icon: FaFolder },
    { name: 'document.pdf', size: '23kb', icon: FaFilePdf },
    { name: 'Word document', size: '23kb', icon: FaFileWord },
  ];

  return (
    <Stack>
      <Toolbar />

      <AllFiles items={allFiles} />

      <Folders items={folders} />
    </Stack>
  );
}

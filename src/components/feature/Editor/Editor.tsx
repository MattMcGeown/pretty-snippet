import type { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { EditorHeader } from '@/components/feature/EditorHeader';
import { EditorBody } from '@/components/feature/EditorBody';

import type { IEditorProps } from './types';

const Editor: FC<IEditorProps> = () => {
  return (
    <Box
      w="90%"
      mx="auto"
      background="linear-gradient(to right top, #0a8de1, #2b83f4, #6372fe, #9a57fc, #ce12eb)"
      p={8}
    >
      <EditorHeader />
      <EditorBody />
    </Box>
  );
};

export default Editor;

Editor.displayName = 'Editor';

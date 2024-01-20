import type { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { EditorHeader } from '@/components/EditorHeader';
import { EditorBody } from '@/components/EditorBody';

import type { IEditorProps } from './types';

const Editor: FC<IEditorProps> = () => {
  return (
    <Box w="90%" mx="auto">
      <EditorHeader />
      <EditorBody />
    </Box>
  );
};

export default Editor;

Editor.displayName = 'Editor';

import type { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { EditorHeader } from '@/components/feature/EditorHeader';
import { EditorBody } from '@/components/feature/EditorBody';
import { selectBackgroundPadding } from '@/stores/reducers/editor/editor.selectors';

import type { IEditorProps } from './types';

const Editor: FC<IEditorProps> = () => {
  const backgroundPadding = useSelector(selectBackgroundPadding);

  return (
    <Box
      w="90%"
      mx="auto"
      background="linear-gradient(to right top, #0a8de1, #2b83f4, #6372fe, #9a57fc, #ce12eb)"
      p={backgroundPadding}
    >
      <EditorHeader />
      <EditorBody />
    </Box>
  );
};

export default Editor;

Editor.displayName = 'Editor';

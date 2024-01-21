import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { Box, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { EditorHeader } from '@/components/feature/EditorHeader';
import { EditorBody } from '@/components/feature/EditorBody';
import { selectBackgroundPadding } from '@/stores/reducers/editor/editor.selectors';

import type { IEditorProps } from './types';

const MotionBox = motion(Box);
const Editor: FC<IEditorProps> = () => {
  const backgroundPadding = useSelector(selectBackgroundPadding);
  const theme = useTheme();

  return (
    <MotionBox
      background="linear-gradient(to right top, #0a8de1, #2b83f4, #6372fe, #9a57fc, #ce12eb)"
      rounded="xl"
      initial={{ padding: theme.space[backgroundPadding] }}
      animate={{ padding: theme.space[backgroundPadding] }}
      transition={{ duration: 0.3 }}
    >
      <EditorHeader />
      <EditorBody />
    </MotionBox>
  );
};

export default Editor;

Editor.displayName = 'Editor';

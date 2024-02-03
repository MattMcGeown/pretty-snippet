import type { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { EditorHeader } from '@/components/feature/EditorHeader';
import { EditorBody } from '@/components/feature/EditorBody';
import { selectBackgroundPadding } from '@/stores/reducers/editor/editor.selectors';

import type { IEditorProps } from './types';

const MotionBox = motion(Box);
const Editor: ForwardRefRenderFunction<HTMLDivElement, IEditorProps> = (
  { background },
  ref
) => {
  const backgroundPadding = useSelector(selectBackgroundPadding);
  const theme = useTheme();

  return (
    <MotionBox
      background={background}
      initial={{ padding: theme.space[backgroundPadding] }}
      animate={{ padding: theme.space[backgroundPadding] }}
      transition={{ duration: 0.3 }}
      ref={ref}
    >
      <EditorHeader />
      <EditorBody />
    </MotionBox>
  );
};

export default forwardRef(Editor);

Editor.displayName = 'Editor';

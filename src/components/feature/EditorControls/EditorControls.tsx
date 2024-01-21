import type { FC } from 'react';
import { Box, Checkbox, Flex, FormLabel } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import type { IEditorControlsProps } from './types';
import { selectLineNumbers } from '@/stores/reducers/editor/editor.selectors';
import { setBackgroundPadding, setLineNumbers } from '@/stores/reducers/editor';
import { PSlider } from '@/components/ui/PSlider';

const MotionBox = motion(Box);

const EditorControls: FC<IEditorControlsProps> = () => {
  const dispatch = useDispatch();
  const hasLineNumbers = useSelector(selectLineNumbers);

  const handleBackgroundPaddingSlider = (value: number) => {
    dispatch(setBackgroundPadding(value));
  };

  return (
    <Flex
      bg="#282c34"
      p={8}
      borderRadius="xl"
      borderWidth={1}
      borderStyle="solid"
      borderColor="rgba(255, 255, 255, 0.3)"
      flexDir="column"
      gap={8}
    >
      <Flex flexDir="column">
        <FormLabel htmlFor="lineNumbers">Line Numbers</FormLabel>
        <Checkbox
          name="lineNumbers"
          variant="pill-hidden"
          isChecked={hasLineNumbers}
          onChange={() => {
            dispatch(setLineNumbers(!hasLineNumbers));
          }}
        >
          <Box
            bg={hasLineNumbers ? 'purple.700' : 'gray.600'}
            transition="background-color ease-in-out 200ms"
            w={24}
            py={2}
            rounded="full"
          >
            <MotionBox
              w={10}
              h={10}
              borderRadius="full"
              bg="white"
              initial={{ x: 6 }}
              animate={{ x: hasLineNumbers ? 30 : 6 }}
              transition={{ duration: 0.3 }}
            />
          </Box>
        </Checkbox>
      </Flex>
      <Box>
        <FormLabel htmlFor="backgroundPaddingSlider">
          Background Padding Size
        </FormLabel>
        <PSlider
          name="backgroundPaddingSlider"
          defaultValue={8}
          min={0}
          max={16}
          onChangeCallback={(value) => handleBackgroundPaddingSlider(value)}
        />
      </Box>
    </Flex>
  );
};

export default EditorControls;

EditorControls.displayName = 'EditorControls';

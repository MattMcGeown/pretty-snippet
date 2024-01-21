import { useState, type FC } from 'react';
import { Box, Checkbox, Flex, FormLabel } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import type { IEditorControlsProps } from './types';

const MotionBox = motion(Box);

const EditorControls: FC<IEditorControlsProps> = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Flex
      mt={10}
      bg="#282c34"
      p={8}
      borderRadius="xl"
      borderWidth={1}
      borderStyle="solid"
      borderColor="rgba(255, 255, 255, 0.3)"
    >
      <Flex flexDir="column">
        <FormLabel htmlFor="lineNumbers">Line Numbers</FormLabel>
        <Checkbox
          name="lineNumbers"
          variant="pill-hidden"
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        >
          <Box
            bg={isChecked ? 'purple.700' : 'gray.600'}
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
              animate={{ x: isChecked ? 30 : 6 }}
              transition={{ duration: 0.3 }}
            />
          </Box>
        </Checkbox>
      </Flex>
    </Flex>
  );
};

export default EditorControls;

EditorControls.displayName = 'EditorControls';

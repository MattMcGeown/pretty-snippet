import type { FC } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ChevronUpIcon, CopyIcon, DownloadIcon } from '@chakra-ui/icons';

import { selectLineNumbers } from '@/stores/reducers/editor/editor.selectors';
import { setBackgroundPadding, setLineNumbers } from '@/stores/reducers/editor';

import type { IEditorControlsProps } from './types';
import { BACKGROUND_PADDING_OPTIONS } from './constants';

const MotionBox = motion(Box);

const EditorControls: FC<IEditorControlsProps> = ({ onExportCallback }) => {
  const dispatch = useDispatch();
  const hasLineNumbers = useSelector(selectLineNumbers);

  const handleBackgroundPaddingSize = (value: number) => {
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
        <Text>Padding Size</Text>
        <Flex gap={4} mt={4}>
          {BACKGROUND_PADDING_OPTIONS.map((option, idx) => (
            <Button
              key={idx}
              rounded="full"
              bg="gray.600"
              color="white"
              _hover={{ bg: 'gray.500' }}
              onClick={() => handleBackgroundPaddingSize(option)}
            >
              {option}
            </Button>
          ))}
        </Flex>
      </Box>
      <Box ml="auto" h="100%">
        <Menu placement="top-start">
          <MenuButton
            as={Button}
            h="100%"
            bg="gray.600"
            color="white"
            _hover={{ bg: 'gray.500' }}
            _active={{ bg: 'gray.500' }}
          >
            Export <ChevronUpIcon />
          </MenuButton>
          <MenuList bg="gray.600" p={4}>
            <MenuItem
              icon={<DownloadIcon />}
              bg="gray.600"
              _hover={{ bg: 'gray.500' }}
              fontSize="md"
              onClick={() => onExportCallback('png')}
            >
              Image PNG
            </MenuItem>
            <MenuItem
              icon={<DownloadIcon />}
              bg="gray.600"
              _hover={{ bg: 'gray.500' }}
              fontSize="md"
              onClick={() => onExportCallback('jpg')}
            >
              Image JPG
            </MenuItem>
            <MenuItem
              icon={<CopyIcon />}
              bg="gray.600"
              _hover={{ bg: 'gray.500' }}
              fontSize="md"
              onClick={() => onExportCallback('clipboard')}
            >
              Copy Image
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default EditorControls;

EditorControls.displayName = 'EditorControls';

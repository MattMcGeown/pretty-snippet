import { useCallback, useRef, useState, type FC } from 'react';
import { Box, Flex, Image, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import logo from '@/assets/react.svg';
import { setTitle } from '@/stores/reducers/editor';

import type { IEditorHeaderProps } from './types';
import { EDITOR_DEFAULT_TITLE } from './constants';

const EditorHeader: FC<IEditorHeaderProps> = () => {
  const dispatch = useDispatch();
  const [inputTitle, setInputTitle] = useState<string>(EDITOR_DEFAULT_TITLE);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputOnChange = (input: string) => {
    setInputTitle(input);
  };

  const handleInputOnFocus = useCallback(() => {
    if (inputRef.current && inputRef.current.value === EDITOR_DEFAULT_TITLE) {
      setInputTitle('');
    }
  }, [inputRef]);

  const handleInputOnBlur = useCallback(() => {
    if (inputRef.current) {
      if (!inputRef.current.value) {
        setInputTitle(EDITOR_DEFAULT_TITLE);
      } else {
        dispatch(setTitle(inputRef.current.value));
      }
    }
  }, [inputRef]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      background="#282c34"
      padding={4}
      borderTopRadius="3xl"
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
    >
      <Image src={logo} alt="Pretty Snippet Logo" aspectRatio="16/9" w={10} />
      <Box>
        <Input
          type="text"
          value={inputTitle}
          maxLength={60}
          spellCheck={false}
          onChange={(e) => handleInputOnChange(e.target.value)}
          ref={inputRef}
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
          background="transparent"
          border="unset"
          outline="unset"
          textAlign="center"
          color="#757575"
        />
      </Box>
      <Flex gap={2.5}>
        <Box w={4} h={4} background="green.500" rounded="full" />
        <Box w={4} h={4} background="blue.500" rounded="full" />
        <Box w={4} h={4} background="red.600" rounded="full" />
      </Flex>
    </Box>
  );
};

export default EditorHeader;

EditorHeader.displayName = 'EditorHeader';

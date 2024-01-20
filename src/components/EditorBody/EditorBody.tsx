import { useState, type FC } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { Box } from '@chakra-ui/react';
import type { IEditorBodyProps } from './types';

const EditorBody: FC<IEditorBodyProps> = () => {
  const [editorValue, setEditorValue] = useState(
    'const myTestFunc = (myStr: string) => {return myStr};'
  );

  const handleOnChange = (editorInputValue: string) => {
    setEditorValue(editorInputValue);
  };

  return (
    <Box fontSize="md">
      <ReactCodeMirror
        value={editorValue}
        onChange={handleOnChange}
        theme="dark"
        height="200px"
        minWidth="300px"
        width="100%"
        extensions={[javascript({ jsx: true })]}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          highlightActiveLine: false,
        }}
      />
    </Box>
  );
};

export default EditorBody;

EditorBody.displayName = 'EditorBody';

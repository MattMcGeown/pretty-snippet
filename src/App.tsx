import { Box, Container, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';

import { Editor } from '@/components/feature/Editor';
import type { ExportAsProps } from '@/components/feature/EditorControls';
import { EditorControls } from '@/components/feature/EditorControls';
import { selectTitle } from '@/stores/reducers/editor/editor.selectors';
import { useExportImageAs } from '@/hooks/exportImage.hooks';

function App() {
  const editorTitle = useSelector(selectTitle);
  const { copyToClipboard, exportAsPng, exportAsJpg } = useExportImageAs();
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  const handleExport = useCallback(
    (type: ExportAsProps) => {
      if (editorWrapperRef.current === null) {
        return;
      }

      switch (type) {
        case 'png':
          exportAsPng({
            element: editorWrapperRef.current,
            fileName: editorTitle,
          });
          break;
        case 'jpg':
          exportAsJpg({
            element: editorWrapperRef.current,
            fileName: editorTitle,
          });
          break;
        case 'clipboard':
          copyToClipboard({ element: editorWrapperRef.current });
          break;
        // TODO: Surface toast
        default:
      }
    },
    [editorTitle]
  );

  return (
    <Box as="main" h="100dvh">
      <Container
        h="100%"
        maxW={{ base: '80vw', md: '65vw', xl: '40vw' }}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        py="10%"
        gap={10}
      >
        <Heading as="h1" textAlign="center">
          Pretty Snippet
        </Heading>
        <Box w="full" px="5em">
          <Editor forwardedRef={editorWrapperRef} />
        </Box>
        <EditorControls onExportCallback={(type) => handleExport(type)} />
      </Container>
    </Box>
  );
}

export default App;

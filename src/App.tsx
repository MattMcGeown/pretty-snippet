import { Box, Container, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useCallback, useRef } from 'react';
import { toJpeg, toPng } from 'html-to-image';

import { Editor } from '@/components/feature/Editor';
import type { ExportAsProps } from '@/components/feature/EditorControls';
import { EditorControls } from '@/components/feature/EditorControls';
import { selectTitle } from '@/stores/reducers/editor/editor.selectors';

function App() {
  const editorTitle = useSelector(selectTitle);
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  const handleExport = useCallback(
    (type: ExportAsProps) => {
      if (editorWrapperRef.current === null) {
        return;
      }

      switch (type) {
        case 'png':
          toPng(editorWrapperRef.current, { cacheBust: true })
            .then((dataUrl) => {
              // Create a temporary anchor element
              const downloadLink = document.createElement('a');
              downloadLink.href = dataUrl;

              // Set the filename for the download
              downloadLink.download = `ps_${editorTitle}.png`;

              // Append the anchor to the body (required in some browsers)
              document.body.appendChild(downloadLink);

              // Simulate a click on the anchor to trigger the download
              downloadLink.click();

              // Remove the anchor from the body
              document.body.removeChild(downloadLink);
            })
            .catch((err: any) => {
              // eslint-disable-next-line no-console
              console.error(err);
            });
          break;
        case 'jpg':
          toJpeg(editorWrapperRef.current, { cacheBust: true })
            .then((dataUrl) => {
              // Create a temporary anchor element
              const downloadLink = document.createElement('a');
              downloadLink.href = dataUrl;

              // Set the filename for the download
              downloadLink.download = `ps_${editorTitle}.jpg`;

              // Append the anchor to the body (required in some browsers)
              document.body.appendChild(downloadLink);

              // Simulate a click on the anchor to trigger the download
              downloadLink.click();

              // Remove the anchor from the body
              document.body.removeChild(downloadLink);
            })
            .catch((err: any) => {
              // eslint-disable-next-line no-console
              console.error(err);
            });
          break;
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
        <Box ref={editorWrapperRef} w="full">
          <Box w="80%" mx="auto">
            <Editor />
          </Box>
        </Box>
        <EditorControls onExportCallback={(type) => handleExport(type)} />
      </Container>
    </Box>
  );
}

export default App;

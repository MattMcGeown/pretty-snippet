import { Box, Container, Heading } from '@chakra-ui/react';

import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Editor } from '@/components/feature/Editor';
import { EditorControls } from '@/components/feature/EditorControls';

function App() {
  const editorWrapperRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (editorWrapperRef.current === null) {
      return;
    }

    toPng(editorWrapperRef.current, { cacheBust: true })
      .then((dataUrl) => {
        // Create a temporary anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;

        // Set the filename for the download
        downloadLink.download = 'image.png';

        // Append the anchor to the body (required in some browsers)
        document.body.appendChild(downloadLink);

        // Simulate a click on the anchor to trigger the download
        downloadLink.click();

        // Remove the anchor from the body
        document.body.removeChild(downloadLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box as="main" h="100dvh">
      <Container
        h="100%"
        maxW={{ base: '80vw', md: '60vw', xl: '40vw' }}
        display="flex"
        flexDir="column"
        justifyContent="center"
        gap={10}
      >
        <Heading as="h1" textAlign="center">
          Pretty Snippet
        </Heading>
        <Box ref={editorWrapperRef}>
          <Editor />
        </Box>
        <EditorControls onExportCallback={handleExport} />
      </Container>
    </Box>
  );
}

export default App;

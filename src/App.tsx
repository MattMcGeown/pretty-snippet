import { Box, Container, Heading } from '@chakra-ui/react';

import { Editor } from '@/components/Editor';
import { EditorControls } from '@/components/EditorControls';

function App() {
  return (
    <Box as="main">
      <Container h="100dvh" maxW={{ base: '80vw', md: '60vw', xl: '40vw' }}>
        <Heading as="h1" textAlign="center">
          Pretty Snippet
        </Heading>
        <Editor />
        <EditorControls />
      </Container>
    </Box>
  );
}

export default App;

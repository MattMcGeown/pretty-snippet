import { Box, Container, Heading } from '@chakra-ui/react';

import { Editor } from '@/components/Editor';
import { EditorControls } from '@/components/EditorControls';

function App() {
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
        <Editor />
        <EditorControls />
      </Container>
    </Box>
  );
}

export default App;

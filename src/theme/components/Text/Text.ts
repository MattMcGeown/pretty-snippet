import { defineStyleConfig } from '@chakra-ui/react';

import { fontSizes } from '@/theme/baseStyles';

const Text = defineStyleConfig({
  baseStyle: {
    fontSize: fontSizes.md,
  },
});

export default Text;

import { defineStyleConfig } from '@chakra-ui/react';

const Checkbox = defineStyleConfig({
  variants: {
    'pill-hidden': {
      control: {
        opacity: 0,
        position: 'absolute',
      },
    },
  },
});

export default Checkbox;

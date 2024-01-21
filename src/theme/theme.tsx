import { extendTheme } from '@chakra-ui/react';

import { breakpoints, fontSizes, styles } from './baseStyles';
import { Text, Checkbox } from './components';

export const defaultTheme = extendTheme({
  breakpoints,
  fontSizes,
  styles,
  components: {
    Text,
    Checkbox,
  },
});

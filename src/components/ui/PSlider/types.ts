import { SliderProps } from '@chakra-ui/react';

export interface IPSliderProps extends SliderProps {
  onChangeCallback: (value: number) => void;
  trackSize?: number;
  thumbSize?: number;
}

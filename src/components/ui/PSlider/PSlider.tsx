import type { FC } from 'react';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';

import type { IPSliderProps } from './types';

const PSlider: FC<IPSliderProps> = ({
  defaultValue,
  min,
  max,
  onChangeCallback,
  trackSize = 2,
  thumbSize = 8,
}) => {
  return (
    <Slider
      defaultValue={defaultValue}
      min={min}
      max={max}
      colorScheme="purple"
      onChange={(value: number) => onChangeCallback(value)}
    >
      <SliderTrack boxSize={trackSize} rounded="full">
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={thumbSize} />
    </Slider>
  );
};

export default PSlider;

PSlider.displayName = 'PSlider';

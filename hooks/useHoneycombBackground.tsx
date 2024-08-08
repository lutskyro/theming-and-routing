// hooks/useHoneycombBackground.tsx

import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';
import Honeycomb from '../components/Honeycomb'; // Adjust the import path as needed

interface HoneycombProps {
  hexSize?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  style?: object;
}

export const useHoneycombBackground = (props: HoneycombProps = {}) => {
  const { width, height } = Dimensions.get('window');

  return useMemo(() => {
    return (
      <Honeycomb
        {...props}
        style={{
          position: 'absolute',
          width,
          height,
          ...props.style,
        }}
      />
    );
  }, [width, height, ...Object.values(props)]);
};
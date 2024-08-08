// components/HoneycombGrid.tsx

import React, { useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface HoneycombGridProps {
  hexSize?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  style?: object;
}

const HoneycombGrid: React.FC<HoneycombGridProps> = ({
  hexSize = 30,
  color = 'transparent',
  strokeColor = '#000000',
  strokeWidth = 1,
  style = {},
}) => {
  const { width, height } = Dimensions.get('window');

  const hexagons = useMemo(() => {
    const hexHeight = hexSize * 2;
    const hexWidth = hexSize * Math.sqrt(3);
    const verticalSpacing = hexHeight * 0.75;
    const horizontalSpacing = hexWidth;

    const rows = Math.ceil(height / verticalSpacing) + 2;
    const cols = Math.ceil(width / horizontalSpacing) + 2;

    const hexPath = `
      M 0,${-hexSize}
      L ${hexWidth / 2},${-hexSize / 2}
      L ${hexWidth / 2},${hexSize / 2}
      L 0,${hexSize}
      L ${-hexWidth / 2},${hexSize / 2}
      L ${-hexWidth / 2},${-hexSize / 2}
      Z
    `;

    return Array.from({ length: rows }, (_, row) =>
      Array.from({ length: cols }, (_, col) => {
        const x = col * horizontalSpacing + (row % 2 ? horizontalSpacing / 2 : 0);
        const y = row * verticalSpacing;

        return (
          <Path
            key={`${row}-${col}`}
            d={hexPath}
            fill={color}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            transform={`translate(${x}, ${y})`}
          />
        );
      })
    ).flat();
  }, [hexSize, color, strokeColor, strokeWidth, height, width]);

  return (
    <View style={[styles.container, style]}>
      <Svg width={width} height={height}>
        {hexagons}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HoneycombGrid;
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props extends React.PropsWithChildren {
  colors: string[];
  locations?: number[];
  style?: StyleProp<ViewStyle>;
}
export default function DiagonalGradient({ colors, children, style, ...rest }: Props) {
  const filledColors = useMemo(() => {
    if (colors.length > 1) return colors;
    return [...colors, colors.at(0) as string];
  }, [colors]);
  return (
    <LinearGradient
      colors={filledColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ flex: 1 }, style]}
      {...rest}>
      {children}
    </LinearGradient>
  );
}

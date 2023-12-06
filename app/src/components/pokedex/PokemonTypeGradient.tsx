import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import DiagonalGradient from '../DiagonalGradient';

interface Props extends React.PropsWithChildren {
  colors: string[];
  style?: StyleProp<ViewStyle>;
}

export default function PokemonTypeGradient({ children, colors, style }: Props) {
  return (
    <DiagonalGradient colors={colors} locations={[0.6, 0.4]} style={style}>
      {children}
    </DiagonalGradient>
  );
}

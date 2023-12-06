import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props extends React.PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export default function Container({ children, style }: Props) {
  return <View style={[styles.centered, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

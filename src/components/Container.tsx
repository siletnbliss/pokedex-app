import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props extends React.PropsWithChildren {}

export default function Container({ children }: Props) {
  return <View style={styles.centered}>{children}</View>;
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

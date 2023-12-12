import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

import { COLORS } from '../utils/constants';
type Props = PressableProps & {
  loading?: boolean;
  title: string;
  style?: ViewStyle;
};

export const CustomButton = ({ loading, title, style, ...rest }: Props) => {
  return (
    <Pressable style={[styles.buttonPrimary, style]} disabled={loading} {...rest}>
      {loading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Text style={styles.text}> {title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: COLORS.primaryButton,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface Props {
  types: string[];
  colors: string[];
}
export default function Type({ types, colors }: Props) {
  return (
    <View style={styles.content}>
      {types.map((type, i) => (
        <View key={type} style={[styles.pill, { backgroundColor: colors[i] }]}>
          <Text style={styles.text}>{type}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    width: 125,
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, StyleSheet, Button, Keyboard, TextInput } from 'react-native';

import { CustomButton } from '../Button';

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Username" style={styles.input} autoCapitalize="none" />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
      />
      <CustomButton onPress={() => {}} title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

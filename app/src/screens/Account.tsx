import React from 'react';
import { View, Text, Button } from 'react-native';

import { useSignIn } from '../hooks/useSignIn';

export default function Account() {
  const { user, onSignIn, isPending, isError, error } = useSignIn();
  const handleLogin = () => {
    onSignIn({ user: 'luigi', pass: 'password' });
  };
  return (
    <View>
      <Text>Account</Text>
      <Text>User: {user?.user.name}</Text>
      <Button title="Sign In" onPress={handleLogin} />
    </View>
  );
}

import React from 'react';
import { View, Text } from 'react-native';

import LoginForm from '../components/auth/LoginForm';
import UserPanel from '../components/auth/UserPanel';
import { useSignIn } from '../hooks/useSignIn';

export default function Account() {
  const { user, onSignIn, isPending, isError, error } = useSignIn();
  const handleLogin = () => {
    onSignIn({ user: 'luigi', pass: 'password' });
  };
  return (
    <View>
      <Text>Account</Text>
      {user ? <UserPanel /> : <LoginForm />}
    </View>
  );
}

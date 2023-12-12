import React from 'react';
import { View } from 'react-native';

import LoginForm from '../components/auth/LoginForm';
import UserPanel from '../components/auth/UserPanel';
import { useSignIn } from '../hooks/useSignIn';

export default function Account() {
  const { user, onSignIn, isPending } = useSignIn();
  const handleLogin = (values: { user: string; password: string }) => {
    onSignIn({ user: values.user, pass: values.password });
  };
  return (
    <View>{user ? <UserPanel /> : <LoginForm onSubmit={handleLogin} loading={isPending} />}</View>
  );
}

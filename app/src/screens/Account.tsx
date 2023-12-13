import React from 'react';
import { View } from 'react-native';

import LoginForm from '../components/auth/LoginForm';
import UserPanel from '../components/auth/UserPanel';
import { useAuth } from '../hooks/useAuth';

export default function Account() {
  const { data, isSignedIn, isLoadingSignIn, signIn, signOut } = useAuth();
  const handleLogin = (values: { user: string; password: string }) => {
    signIn({ user: values.user, pass: values.password });
  };
  return (
    <View>
      {isSignedIn && !!data ? (
        <UserPanel user={data?.user} onLogout={signOut} />
      ) : (
        <LoginForm onSubmit={handleLogin} loading={isLoadingSignIn} />
      )}
    </View>
  );
}

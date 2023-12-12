import React, { useState, createContext } from 'react';

import { useSignIn } from '../hooks/useSignIn';
import { AuthenticateUserParams, AuthenticateUserResponse } from '../types/auth';

interface Context {
  data: null | AuthenticateUserResponse;
  isSignedIn: boolean;
  isLoadingSignIn: boolean;
  signIn: (user: AuthenticateUserParams) => void;
  signOut: () => void;
}

export const AuthContext = createContext<Context>({
  data: null,
  isSignedIn: false,
  isLoadingSignIn: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = useState<Context['data']>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSuccess = (data: AuthenticateUserResponse) => {
    setData(data);
    setIsSignedIn(true);
  };

  const { isPending, onSignIn } = useSignIn({ onSuccess });

  const signIn = (data: AuthenticateUserParams) => {
    onSignIn(data);
  };

  const signOut = () => {
    setIsSignedIn(false);
  };

  const context: Context = {
    data,
    isSignedIn,
    isLoadingSignIn: isPending,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

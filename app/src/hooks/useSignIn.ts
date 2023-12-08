import { useMutator } from './useFetcher';
import { AuthenticateUserParams, AuthenticateUserResponse } from '../types/auth';

export const useSignIn = () => {
  const {
    data: user,
    mutate,
    ...rest
  } = useMutator<AuthenticateUserResponse, AuthenticateUserParams>(['auth', 'login'], {
    method: 'post',
    api: 'auth',
  });
  return {
    user,
    onSignIn: mutate,
    ...rest,
  };
};

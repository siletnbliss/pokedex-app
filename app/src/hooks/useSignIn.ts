import Toast from 'react-native-toast-message';

import { useMutator } from './useFetcher';
import { AuthenticateUserParams, AuthenticateUserResponse } from '../types/auth';
import { getErrorCode } from '../utils/getErrorCode';

export const useSignIn = () => {
  const {
    data: user,
    mutate,
    ...rest
  } = useMutator<AuthenticateUserResponse, AuthenticateUserParams>(['auth', 'login'], {
    method: 'post',
    api: 'auth',
    onError: (error, variables) => {
      const code = getErrorCode(error);

      Toast.show({
        text1: 'Invalid Sign In',
        text2:
          code === 400 ? 'Please checkout your credentials' : 'Error connecting to auth server',
        type: 'error',
      });
    },
  });
  return {
    user,
    onSignIn: mutate,
    ...rest,
  };
};

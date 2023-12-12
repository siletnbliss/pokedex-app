import { AxiosError } from 'axios';

export const getErrorCode = (error: Error): number => {
  if (error instanceof AxiosError) {
    return error?.response?.status || 500;
  }

  return 500;
};

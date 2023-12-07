import { User } from 'src/users/use-cases/types';

export interface AuthenticateUserDto {
  user: string;
  pass: string;
}

export interface AuthenticatedUser extends Omit<User, 'password'> {}

export interface AuthenticateUserResponse {
  token: string;
  user: AuthenticatedUser;
}

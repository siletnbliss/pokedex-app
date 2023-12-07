import { AuthenticateUserDto, AuthenticateUserResponse } from './types';

export abstract class AuthenticateUserUseCase {
  abstract signIn(dto: AuthenticateUserDto): Promise<AuthenticateUserResponse>;
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateUserUseCase } from './authenticateUser.use-case';
import { AuthenticateUserDto, AuthenticateUserResponse } from './types';
import { GetUsersService } from '../../users/use-cases/getUsers.service';

@Injectable()
export class AuthenticateUserService implements AuthenticateUserUseCase {
  constructor(private userService: GetUsersService) {}
  async signIn(dto: AuthenticateUserDto): Promise<AuthenticateUserResponse> {
    const user = await this.userService.getUser({
      user: dto.user,
      email: dto.user,
    });
    if (user?.password !== dto.pass) {
      throw new UnauthorizedException();
    }
    // TODO: add proper JWT token
    return {
      token: 'ok',
      user: user,
    };
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticateUserUseCase } from '../use-cases/authenticateUser.use-case';
import { AuthenticateUserDto } from '../use-cases/types';

@Controller('auth')
export class AuthController {
  constructor(private authUseCase: AuthenticateUserUseCase) {}

  @Post('login')
  signIn(@Body() dto: AuthenticateUserDto) {
    return this.authUseCase.signIn(dto);
  }
}

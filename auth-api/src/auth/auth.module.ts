import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controller/auth.controller';
import { AuthenticateUserUseCase } from './use-cases/authenticateUser.use-case';
import { AuthenticateUserService } from './use-cases/authenticateUser.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    {
      provide: AuthenticateUserUseCase,
      useClass: AuthenticateUserService,
    },
  ],
})
export class AuthModule {}

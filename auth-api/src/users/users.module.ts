import { Module } from '@nestjs/common';
import { UserRepositoryPort } from './persistence/userRepository.port';
import { InMemoryUserRepository } from './persistence/user.repository';
import { GetUsersService } from './use-cases/getUsers.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: UserRepositoryPort,
      useClass: InMemoryUserRepository,
    },
    GetUsersService,
  ],
  exports: [GetUsersService],
})
export class UsersModule {}

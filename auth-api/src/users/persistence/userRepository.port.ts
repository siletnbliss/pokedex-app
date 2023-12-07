import { Injectable } from '@nestjs/common';
import { GetUserDto, User } from '../use-cases/types';

@Injectable()
export abstract class UserRepositoryPort {
  abstract getUserFromCredentials: (dto: GetUserDto) => Promise<User | null>;
}

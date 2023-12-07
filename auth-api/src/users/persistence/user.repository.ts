import { Injectable } from '@nestjs/common';
import { UserRepositoryPort } from './userRepository.port';
import { GetUserDto, User } from '../use-cases/types';

const USERS: User[] = [
  {
    id: '1',
    email: 'luis@email.com',
    name: 'Luis Castillo',
    password: 'password',
    username: 'luigi',
  },
];

@Injectable()
export class InMemoryUserRepository implements UserRepositoryPort {
  async getUserFromCredentials({
    user,
    email,
  }: GetUserDto): Promise<User | null> {
    return USERS.find((u) => u.email === email || u.username === user) || null;
  }
}

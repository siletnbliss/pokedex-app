import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepositoryPort } from '../persistence/userRepository.port';
import { GetUserDto } from './types';

@Injectable()
export class GetUsersService {
  constructor(private repository: UserRepositoryPort) {}

  async getUser(dto: GetUserDto) {
    const user = await this.repository.getUserFromCredentials(dto);
    if (!user) throw new BadRequestException(`user not found`);
    return user;
  }
}

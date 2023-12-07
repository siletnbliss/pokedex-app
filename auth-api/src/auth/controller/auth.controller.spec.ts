import { Test } from '@nestjs/testing';
import { AuthenticateUserService } from '../use-cases/authenticateUser.service';
import { AuthenticateUserUseCase } from '../use-cases/authenticateUser.use-case';
import { AuthController } from './auth.controller';
import { GetUsersService } from '../../users/use-cases/getUsers.service';
import { GetUserDto, User } from '../../users/use-cases/types';
import { UsersModule } from '../../users/users.module';
import { UnauthorizedException } from '@nestjs/common';
const MOCK_PASSWORD = 'password';
const mockService: (dto: GetUserDto) => Promise<User> = async ({
  user,
  email,
}) => ({
  username: user,
  email: email,
  password: MOCK_PASSWORD,
  name: '',
  id: '1',
});

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthenticateUserUseCase, useClass: AuthenticateUserService },
      ],
      imports: [
        {
          module: UsersModule,
          providers: [
            {
              provide: GetUsersService,
              useValue: { getUser: jest.fn(mockService) },
            },
          ],
        },
      ],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
  });

  describe('signIn', () => {
    it('should sign in with correct credentials', async () => {
      const signedIn = await authController.signIn({
        user: 'user',
        pass: MOCK_PASSWORD,
      });
      expect(signedIn.token).toBeDefined();
    });

    it('should throw an unauthorized exception with incorrect crendentials ', async () => {
      const badPassword = MOCK_PASSWORD + 'x';
      expect(
        authController.signIn({ user: 'user', pass: badPassword }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});

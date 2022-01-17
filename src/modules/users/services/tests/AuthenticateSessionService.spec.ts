import 'reflect-metadata';
import { HashProviderInMemoryRepository } from '../../providers/HashProvider/in-memory/HashProviderInMemoryRepository';
import { UsersInMemoryRepositorio } from '../../domain/repositories/in-Memory/UsersInMemoryRepositorio';

import { AuthenticateSessionService } from '../AuthenticateSessionService';
import { AppError } from '../../../../shared/errors/AppError';

let authenticateSessionService: AuthenticateSessionService;
let usersInMemoryRepositorio: UsersInMemoryRepositorio;
let hashProviderInMemoryRepositorio: HashProviderInMemoryRepository;

describe('CreateSession', () => {
  beforeEach(() => {
    usersInMemoryRepositorio = new UsersInMemoryRepositorio();
    hashProviderInMemoryRepositorio = new HashProviderInMemoryRepository();
    authenticateSessionService = new AuthenticateSessionService(
      usersInMemoryRepositorio,
      hashProviderInMemoryRepositorio,
    );
  });

  it('should be able to authenticate', async () => {
    const createUser = await usersInMemoryRepositorio.create({
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    });

    const response = await authenticateSessionService.execute({
      email: 'test@test.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(createUser);
  });

  it('should not be able to authenticate with non existent user', async () => {
    expect(
      authenticateSessionService.execute({
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await usersInMemoryRepositorio.create({
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    });

    expect(
      authenticateSessionService.execute({
        email: 'test@test.com',
        password: '567890',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

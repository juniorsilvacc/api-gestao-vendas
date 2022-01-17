import 'reflect-metadata';
import { HashProviderInMemoryRepository } from '../../providers/HashProvider/in-memory/HashProviderInMemoryRepository';
import { UsersInMemoryRepositorio } from '../../domain/repositories/in-Memory/UsersInMemoryRepositorio';

import { CreateUserService } from '../CreateUserService';
import { AppError } from '../../../../shared/errors/AppError';

let createUserService: CreateUserService;
let usersInMemoryRepositorio: UsersInMemoryRepositorio;
let hashProviderInMemoryRepositorio: HashProviderInMemoryRepository;

describe('CreateUser', () => {
  beforeEach(() => {
    usersInMemoryRepositorio = new UsersInMemoryRepositorio();
    hashProviderInMemoryRepositorio = new HashProviderInMemoryRepository();
    createUserService = new CreateUserService(
      usersInMemoryRepositorio,
      hashProviderInMemoryRepositorio,
    );
  });

  it('should be able to create a new user', async () => {
    const createUser = await createUserService.execute({
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    });

    expect(createUser).toHaveProperty('id');
  });

  it('should not be able to create two users with the same email', async () => {
    await createUserService.execute({
      name: 'Nome Test',
      email: 'test@test.com',
      password: '123456',
    });

    expect(
      createUserService.execute({
        name: 'Nome Test',
        email: 'test@test.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

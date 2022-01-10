import { AppError } from '@shared/errors/AppError';
import { User } from '../typeorm/entities/User';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExits = await usersRepository.findByEmail(email);

    if (emailExits) {
      throw new AppError('User already exists.');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };

import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import { hash } from 'bcrypt';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExits = await usersRepository.findByEmail(email);

    if (emailExits) {
      throw new AppError('User already exists.');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    await usersRepository.save(user);
  }
}

export { CreateUserService };

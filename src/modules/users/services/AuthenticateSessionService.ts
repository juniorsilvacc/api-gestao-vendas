import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { User } from '../typeorm/entities/User';

import { compare } from 'bcrypt';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    password: string;
  };
}

class AuthenticateSessionService {
  async execute({ email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 401);
    }

    return user;
  }
}

export { AuthenticateSessionService };

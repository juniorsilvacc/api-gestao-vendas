import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import { hash } from 'bcrypt';
import { isAfter, addHours } from 'date-fns';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';
import { UserTokensRepository } from '../infra/typeorm/repositories/UserTokensRepository';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  async execute({ token, password }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const userToken = await userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('Token does not exists.', 401);
    }

    const user = await usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.', 401);
    }

    user.password = await hash(password, 8);

    await usersRepository.save(user);
  }
}

export { ResetPasswordService };

import { getCustomRepository } from 'typeorm';
import { User } from '../infra/typeorm/entities/User';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';

class ListUserService {
  async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.find();

    return user;
  }
}

export { ListUserService };

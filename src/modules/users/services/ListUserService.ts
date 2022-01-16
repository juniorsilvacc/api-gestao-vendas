import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { User } from '../infra/typeorm/entities/User';

@injectable()
class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<User[]> {
    const user = await this.usersRepository.findAll();

    return user;
  }
}

export { ListUserService };

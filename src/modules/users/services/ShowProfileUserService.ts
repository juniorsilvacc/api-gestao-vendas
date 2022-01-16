import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { User } from '../infra/typeorm/entities/User';

interface IRequest {
  id: string;
}

@injectable()
class ShowProfileUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export { ShowProfileUserService };

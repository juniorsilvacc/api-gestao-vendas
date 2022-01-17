import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { IHashProvider } from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const emailExits = await this.usersRepository.findByEmail(email);

    if (emailExits) {
      throw new AppError('User already exists.');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserService };

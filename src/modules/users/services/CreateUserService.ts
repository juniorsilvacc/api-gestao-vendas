import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcrypt';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

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
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const emailExits = await this.usersRepository.findByEmail(email);

    if (emailExits) {
      throw new AppError('User already exists.');
    }

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserService };

import { AppError } from '@shared/errors/AppError';
import { compare, hash } from 'bcrypt';
import { getCustomRepository } from 'typeorm';
import { User } from '../infra/typeorm/entities/User';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

class UpdateProfileUserService {
  async execute({
    id,
    name,
    email,
    old_password,
    password,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const userEmail = await usersRepository.findByEmail(email);

    if (userEmail && userEmail.id !== id) {
      throw new AppError('There is already one user with this email.');
    }

    if (password && !old_password) {
      throw new AppError('Old password is required.');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      user.password = await hash(password, 8);
    }

    user.name = name;
    user.email = email;

    await usersRepository.save(user);

    return user;
  }
}

export { UpdateProfileUserService };

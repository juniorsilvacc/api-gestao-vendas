import path from 'path';
import uploadConfig from '@config/upload';
import fs from 'fs';

import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { User } from '../typeorm/entities/User';

interface IRequest {
  user_id: string;
  avatarFile: string;
}

class UpdateAvatarUserService {
  async execute({ user_id, avatarFile }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found', 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFile;

    await usersRepository.save(user);

    return user;
  }
}

export { UpdateAvatarUserService };

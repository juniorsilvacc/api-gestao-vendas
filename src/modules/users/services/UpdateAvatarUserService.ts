import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

import { DiskStorageProvider } from '@shared/providers/StorageProvider/DiskStorageProvider';

interface IRequest {
  user_id: string;
  avatarFileName: string;
}

class UpdateAvatarUserService {
  async execute({ user_id, avatarFileName }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const storageProvider = new DiskStorageProvider();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    if (user.avatar) {
      await storageProvider.deleteFile(user.avatar);
    }

    const filename = await storageProvider.saveFile(avatarFileName);

    user.avatar = filename;

    await usersRepository.save(user);
  }
}

export { UpdateAvatarUserService };

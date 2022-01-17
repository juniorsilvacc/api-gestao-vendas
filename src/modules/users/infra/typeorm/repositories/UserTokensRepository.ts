import { IUserToken } from '@modules/users/domain/models/IUserToken';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { getRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  async findByToken(token: string): Promise<IUserToken | undefined> {
    const userToken = await this.ormRepository.findOne({ token });

    return userToken;
  }

  async generateToken(user_id: string): Promise<IUserToken> {
    const userToken = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };

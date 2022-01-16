import { IUserTokensRepository } from '@modules/users/repositories/IUserTokensRepository';
import { EntityRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository
  extends Repository<UserToken>
  implements IUserTokensRepository
{
  async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({ token });

    return userToken;
  }

  async generateToken(user_id: string): Promise<UserToken> {
    const userToken = await this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  }
}

export { UserTokensRepository };

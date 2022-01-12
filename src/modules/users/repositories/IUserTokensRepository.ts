import { UserToken } from '../typeorm/entities/UserToken';

interface IUserTokensRepository {
  findByToken(token: string): Promise<UserToken | undefined>;
  generateToken(user_id: string): Promise<UserToken | undefined>;
}

export { IUserTokensRepository };

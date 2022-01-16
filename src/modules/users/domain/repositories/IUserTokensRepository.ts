import { IUserToken } from '../models/IUserToken';

interface IUserTokensRepository {
  findByToken(token: string): Promise<IUserToken | undefined>;
  generateToken(user_id: string): Promise<IUserToken>;
}

export { IUserTokensRepository };

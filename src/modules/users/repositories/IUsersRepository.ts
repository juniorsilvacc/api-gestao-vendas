import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  findByName(name: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUsersRepository };

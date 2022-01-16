import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> implements IUsersRepository {
  async findByName(name: string): Promise<User | undefined> {
    const userName = await this.findOne({ name });

    return userName;
  }

  async findById(id: string): Promise<User | undefined> {
    const userId = await this.findOne(id);

    return userId;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const userEmail = await this.findOne({ email });

    return userEmail;
  }
}

export { UsersRepository };

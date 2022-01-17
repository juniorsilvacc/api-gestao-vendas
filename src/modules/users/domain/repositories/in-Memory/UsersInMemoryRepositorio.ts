import { User } from '../../../infra/typeorm/entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUser } from '../../models/IUser';
import { IUsersRepository } from '../IUsersRepository';

class UsersInMemoryRepositorio implements IUsersRepository {
  users: User[] = [];

  async findByName(name: string): Promise<IUser | undefined> {
    const user = this.users.find(user => user.name === name);

    return user;
  }

  async findById(id: string): Promise<IUser | undefined> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const createUser = new User();

    Object.assign(createUser, {
      name,
      email,
      password,
    });

    this.users.push(createUser);

    return createUser;
  }

  async findAll(): Promise<IUser[]> {
    const listAll = this.users;

    return listAll;
  }

  async save(user: IUser): Promise<void> {
    const findIndex = this.users.findIndex(
      findIndex => findIndex.id === user.id,
    );

    this.users[findIndex] = user;
  }
}

export { UsersInMemoryRepositorio };

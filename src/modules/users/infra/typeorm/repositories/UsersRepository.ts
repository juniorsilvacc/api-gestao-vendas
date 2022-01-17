import { ICreateUserDTO } from '@modules/users/domain/dtos/ICreateUserDTO';
import { IUser } from '@modules/users/domain/models/IUser';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async save(user: IUser): Promise<void> {
    await this.ormRepository.save(user);
  }

  async findAll(): Promise<IUser[]> {
    const usersAll = await this.ormRepository.find();

    return usersAll;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
    const createUser = this.ormRepository.create({
      name,
      email,
      password,
    });

    await this.ormRepository.save(createUser);

    return createUser;
  }

  async findByName(name: string): Promise<IUser | undefined> {
    const userName = await this.ormRepository.findOne({ name });

    return userName;
  }

  async findById(id: string): Promise<IUser | undefined> {
    const userId = await this.ormRepository.findOne(id);

    return userId;
  }

  async findByEmail(email: string): Promise<IUser | undefined> {
    const userEmail = await this.ormRepository.findOne({ email });

    return userEmail;
  }
}

export { UsersRepository };

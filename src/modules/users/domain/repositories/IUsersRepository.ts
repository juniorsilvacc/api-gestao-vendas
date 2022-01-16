import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUser } from '../models/IUser';

interface IUsersRepository {
  save(user: IUser): Promise<void>;
  findAll(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<void>;
  findByName(name: string): Promise<IUser | undefined>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
}

export { IUsersRepository };

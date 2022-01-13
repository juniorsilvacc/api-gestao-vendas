import { Customer } from '../typeorm/entities/Customer';

interface ICustomersRepository {
  findByEmail(email: string): Promise<Customer | undefined>;
  findByName(name: string): Promise<Customer | undefined>;
  findById(id: string): Promise<Customer | undefined>;
}

export { ICustomersRepository };

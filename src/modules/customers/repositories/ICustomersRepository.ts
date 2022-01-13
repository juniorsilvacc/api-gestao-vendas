import { Customer } from '../typeorm/entities/Customer';

interface ICustomersRepository {
  findByEmail(email: string): Promise<Customer | undefined>;
}

export { ICustomersRepository };

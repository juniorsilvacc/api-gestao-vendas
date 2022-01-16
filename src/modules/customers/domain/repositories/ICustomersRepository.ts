import { ICreateCustomerDTO } from '../dtos/ICreateCustomerDTO';
import { ICustomer } from '../models/ICustomer';

interface ICustomersRepository {
  findByEmail(email: string): Promise<ICustomer | undefined>;
  findByName(name: string): Promise<ICustomer | undefined>;
  findById(id: string): Promise<ICustomer | undefined>;
  create(data: ICreateCustomerDTO): Promise<ICustomer>;
  findByDelete(id: string): Promise<void>;
  findAll(): Promise<ICustomer[] | undefined>;
  save(customer: ICustomer): Promise<ICustomer>;
}

export { ICustomersRepository };

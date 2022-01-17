import { Customer } from '../../../infra/typeorm/entities/Customer';
import { ICreateCustomerDTO } from '../../dtos/ICreateCustomerDTO';
import { ICustomer } from '../../models/ICustomer';

import { ICustomersRepository } from '../ICustomersRepository';

class CustomersInMemoryRepository implements ICustomersRepository {
  customers: Customer[] = [];

  async findByName(name: string): Promise<ICustomer | undefined> {
    const customer = this.customers.find(customer => customer.name === name);

    return customer;
  }

  async findById(id: string): Promise<ICustomer | undefined> {
    const customer = this.customers.find(customer => customer.id === id);

    return customer;
  }

  async findByEmail(email: string): Promise<ICustomer | undefined> {
    const customer = this.customers.find(customer => customer.email === email);

    return customer;
  }

  async create({ name, email }: ICreateCustomerDTO): Promise<ICustomer> {
    const createCustomer = new Customer();

    Object.assign(createCustomer, {
      name,
      email,
    });

    this.customers.push(createCustomer);

    return createCustomer;
  }

  async findByDelete(id: string): Promise<void> {
    this.customers.find(customer => customer.id === id);
  }

  async findAll(): Promise<ICustomer[] | undefined> {
    const listAll = this.customers;

    return listAll;
  }

  async save(customer: Customer): Promise<ICustomer> {
    Object.assign(this.customers, customer);

    return customer;
  }
}

export { CustomersInMemoryRepository };

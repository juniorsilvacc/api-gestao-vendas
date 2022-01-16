import { ICustomer } from '@modules/customers/domain/models/ICustomer';
import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
import { ICreateCustomerDTO } from '@modules/customers/domain/dtos/ICreateCustomerDTO';
import { getRepository, Repository } from 'typeorm';
import { Customer } from '../entities/Customer';

class CustomersRepository implements ICustomersRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  async findByName(name: string): Promise<ICustomer | undefined> {
    const customerName = await this.ormRepository.findOne({ name });

    return customerName;
  }

  async findById(id: string): Promise<ICustomer | undefined> {
    const customerId = await this.ormRepository.findOne({ id });

    return customerId;
  }

  async findByEmail(email: string): Promise<ICustomer | undefined> {
    const customerEmail = await this.ormRepository.findOne({ email });

    return customerEmail;
  }

  async create({ name, email }: ICreateCustomerDTO): Promise<ICustomer> {
    const createCustomer = this.ormRepository.create({ name, email });

    await this.ormRepository.save(createCustomer);

    return createCustomer;
  }

  async findByDelete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findAll(): Promise<ICustomer[] | undefined> {
    const customers = await this.ormRepository.find();

    return customers;
  }

  async save(customer: Customer): Promise<ICustomer> {
    await this.ormRepository.save(customer);

    return customer;
  }
}

export { CustomersRepository };

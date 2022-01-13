import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';
import { EntityRepository, Repository } from 'typeorm';
import { Customer } from '../entities/Customer';

@EntityRepository(Customer)
class CustomersRepository
  extends Repository<Customer>
  implements ICustomersRepository
{
  async findByName(name: string): Promise<Customer | undefined> {
    const customerName = await this.findOne({ name });

    return customerName;
  }

  async findById(id: string): Promise<Customer | undefined> {
    const customerId = await this.findOne({ id });

    return customerId;
  }

  async findByEmail(email: string): Promise<Customer | undefined> {
    const customerEmail = await this.findOne({ email });

    return customerEmail;
  }
}

export { CustomersRepository };

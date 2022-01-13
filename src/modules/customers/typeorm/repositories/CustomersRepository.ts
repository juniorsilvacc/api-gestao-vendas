import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';
import { EntityRepository, Repository } from 'typeorm';
import { Customer } from '../entities/Customer';

@EntityRepository(Customer)
class CustomersRepository
  extends Repository<Customer>
  implements ICustomersRepository
{
  async findByEmail(email: string): Promise<Customer | undefined> {
    const customerEmail = await this.findOne({ email });

    return customerEmail;
  }
}

export { CustomersRepository };

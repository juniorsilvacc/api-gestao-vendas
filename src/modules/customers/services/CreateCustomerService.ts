import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICustomer } from '../domain/models/ICustomer';
import { ICustomersRepository } from '../domain/repositories/ICustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  async execute({ name, email }: IRequest): Promise<ICustomer> {
    const customerExits = await this.customersRepository.findByEmail(email);

    if (customerExits) {
      throw new AppError('The Customer already exists.');
    }

    const customer = this.customersRepository.create({
      name,
      email,
    });

    return customer;
  }
}

export { CreateCustomerService };

import { AppError } from '../../../../shared/errors/AppError';
import { CustomersInMemoryRepository } from '../../domain/repositories/in-memory/CustomersInMemoryRepository';
import { CreateCustomerService } from '../CreateCustomerService';

let createCustomerService: CreateCustomerService;
let customersInMemoryRepository: CustomersInMemoryRepository;

describe('CreateCustomer', () => {
  beforeEach(() => {
    customersInMemoryRepository = new CustomersInMemoryRepository();
    createCustomerService = new CreateCustomerService(
      customersInMemoryRepository,
    );
  });

  it('should be able to create a new customer', async () => {
    const customer = await createCustomerService.execute({
      name: 'Cícero Júnior',
      email: 'juniorsilva@hotmail.com',
    });

    expect(customer).toHaveProperty('id');
  });

  it('should be able to create two customers with the same email', async () => {
    await createCustomerService.execute({
      name: 'Nome Test',
      email: 'test@test.com.br',
    });

    expect(
      createCustomerService.execute({
        name: 'Nome Test Two',
        email: 'test@test.com.br',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

import { CreateCustomerService } from '@modules/customers/services/CreateCustomerService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomerService = container.resolve(CreateCustomerService);

    const customer = await createCustomerService.execute({ name, email });

    return response.status(201).json(customer);
  }
}

export { CreateCustomerController };

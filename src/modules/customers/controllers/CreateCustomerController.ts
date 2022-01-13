import { Request, Response } from 'express';
import { CreateCustomerService } from '../services/CreateCustomerService';
import { container } from 'tsyringe';

class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomerService = container.resolve(CreateCustomerService);

    await createCustomerService.execute({ name, email });

    return response.status(201).send();
  }
}

export { CreateCustomerController };

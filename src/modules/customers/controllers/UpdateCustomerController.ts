import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCustomerService } from '../services/UpdateCustomerService';

class UpdateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const updateCustomerService = container.resolve(UpdateCustomerService);

    const customer = await updateCustomerService.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }
}

export { UpdateCustomerController };

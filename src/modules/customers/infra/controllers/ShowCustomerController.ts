import { ShowCustomerService } from '@modules/customers/services/ShowCustomerService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ShowCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomerService = container.resolve(ShowCustomerService);

    const customer = await showCustomerService.execute({ id });

    return response.json(customer);
  }
}

export { ShowCustomerController };

import { ListCustomerService } from '@modules/customers/services/ListCustomerService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCustomerService = container.resolve(ListCustomerService);

    const customers = await listCustomerService.execute();

    return response.json(customers);
  }
}

export { ListCustomerController };

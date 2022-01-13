import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomerService = container.resolve(DeleteCustomerService);

    await deleteCustomerService.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteCustomerController };

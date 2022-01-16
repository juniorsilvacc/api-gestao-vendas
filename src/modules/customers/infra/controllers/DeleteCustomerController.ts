import { DeleteCustomerService } from '@modules/customers/services/DeleteCustomerService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCustomerService = container.resolve(DeleteCustomerService);

    await deleteCustomerService.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteCustomerController };

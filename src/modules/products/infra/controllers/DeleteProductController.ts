import { DeleteProductService } from '@modules/products/services/DeleteProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProductService = container.resolve(DeleteProductService);

    await deleteProductService.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteProductController };

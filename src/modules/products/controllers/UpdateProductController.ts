import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateProductService } from '../services/UpdateProductService';

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;

    const updateProductService = container.resolve(UpdateProductService);

    const product = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }
}

export { UpdateProductController };

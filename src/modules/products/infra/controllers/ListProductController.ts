import { ListProductService } from '@modules/products/services/ListProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductService = container.resolve(ListProductService);

    const products = await listProductService.execute();

    return response.json(products);
  }
}

export { ListProductController };

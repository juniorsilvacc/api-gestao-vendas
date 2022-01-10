import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductService } from '../services/ListProductService';

class ListProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductService = container.resolve(ListProductService);

    const products = await listProductService.execute();

    return response.json(products);
  }
}

export { ListProductController };

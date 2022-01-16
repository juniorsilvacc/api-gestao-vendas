import { ShowProductService } from '@modules/products/services/ShowProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ShowProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProductService = container.resolve(ShowProductService);

    const produtc = await showProductService.execute({ id });

    return response.json(produtc);
  }
}

export { ShowProductController };

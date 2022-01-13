import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowProductService } from '../services/ShowProductService';

class ShowProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProductService = container.resolve(ShowProductService);

    const produtc = await showProductService.execute({ id });

    return response.json(produtc);
  }
}

export { ShowProductController };

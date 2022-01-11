import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowProductService } from '../services/ShowProductService';

class ShowProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    console.log(request.user.id);

    const showProductService = container.resolve(ShowProductService);

    const produtcs = await showProductService.execute({ id });

    return response.json(produtcs);
  }
}

export { ShowProductController };

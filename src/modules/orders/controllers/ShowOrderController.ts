import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ShowOrderService } from '../services/ShowOrderService';

class ShowOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrderService = container.resolve(ShowOrderService);

    const order = await showOrderService.execute({ id });

    return response.json(order);
  }
}

export { ShowOrderController };

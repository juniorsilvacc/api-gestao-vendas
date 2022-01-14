import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateOrderService } from '../services/CreateOrderService';

class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    const createOrderService = container.resolve(CreateOrderService);

    const order = await createOrderService.execute({ customer_id, products });

    return response.status(201).json(order);
  }
}

export { CreateOrderController };

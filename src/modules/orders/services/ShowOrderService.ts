import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IOrdersRepository } from '../domain/repositories/IOrdersRepository';
import { Order } from '../infra/typeorm/entities/Order';

interface IRequest {
  id: string;
}

@injectable()
class ShowOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Order> {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found');
    }

    return order;
  }
}

export { ShowOrderService };

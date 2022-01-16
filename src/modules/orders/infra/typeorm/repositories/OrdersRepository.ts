import ICreateOrder from '@modules/orders/domain/dtos/ICreateOrder';
import { IOrder } from '@modules/orders/domain/models/IOrder';
import { IOrdersRepository } from '@modules/orders/domain/repositories/IOrdersRepository';
import { getRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  async createOrder({ customer, products }: ICreateOrder): Promise<IOrder> {
    const order = this.ormRepository.create({
      customer,
      order_products: products,
    });

    await this.ormRepository.save(order);

    return order;
  }

  async findById(id: string): Promise<IOrder | undefined> {
    const order = await this.ormRepository.findOne(id, {
      relations: ['order_products', 'customer'],
    });

    return order;
  }
}

export { OrdersRepository };

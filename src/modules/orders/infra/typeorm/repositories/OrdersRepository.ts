import IRequest, {
  IOrdersRepository,
} from '@modules/orders/repositories/IOrdersRepository';
import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../entities/Order';

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> implements IOrdersRepository {
  async createOrder({ customer, products }: IRequest): Promise<Order> {
    const order = this.create({
      customer,
      order_products: products,
    });

    await this.save(order);

    return order;
  }

  async findById(id: string): Promise<Order | undefined> {
    const order = await this.findOne(id, {
      relations: ['order_products', 'customer'],
    });

    return order;
  }
}

export { OrdersRepository };

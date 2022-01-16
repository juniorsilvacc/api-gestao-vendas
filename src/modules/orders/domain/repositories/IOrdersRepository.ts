import ICreateOrder from '../dtos/ICreateOrder';
import { IOrder } from '../models/IOrder';

interface IOrdersRepository {
  findById(id: string): Promise<IOrder | undefined>;
  createOrder(data: ICreateOrder): Promise<IOrder>;
}

export { IOrdersRepository };

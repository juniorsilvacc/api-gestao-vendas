import { Customer } from '@modules/customers/typeorm/entities/Customer';
import { Order } from '../typeorm/entities/Order';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

export default interface IRequest {
  customer: Customer;
  products: IProduct[];
}

interface IOrdersRepository {
  findById(id: string): Promise<Order | undefined>;
  createOrder({ customer, products }: IRequest): Promise<Order>;
}

export { IOrdersRepository, IRequest };

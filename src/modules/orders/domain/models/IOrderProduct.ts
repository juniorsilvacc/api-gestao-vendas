import { Order } from '@modules/orders/infra/typeorm/entities/Order';
import { Product } from '@modules/products/infra/typeorm/entities/Product';

interface IOrderProduct {
  id: string;
  order: Order;
  product: Product;
  order_id: string;
  product_id: string;
  price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

export { IOrderProduct };

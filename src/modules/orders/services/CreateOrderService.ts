import { IProductsRepository } from '@modules/products/domain/repositories/IProductsRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { ICustomersRepository } from '../../customers/domain/repositories/ICustomersRepository';
import { IOrder } from '../domain/models/IOrder';
import { IOrdersRepository } from '../domain/repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_id: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ customer_id, products }: IRequest): Promise<IOrder> {
    const customerExits = await this.customersRepository.findById(customer_id);

    if (!customerExits) {
      throw new AppError('Could not find any customer with the given id.');
    }

    const existsProducts = await this.productsRepository.findAllByIds(products);

    if (!existsProducts.length) {
      throw new AppError('Could not find any products with the given ids.');
    }

    const existsProductsIds = existsProducts.map(product => product.id);

    const checkInexistentProducts = products.filter(
      product => !existsProductsIds.includes(product.id),
    );

    if (checkInexistentProducts.length) {
      throw new AppError(
        `Could not find products ${checkInexistentProducts[0].id}.`,
      );
    }

    const quantityAvailable = products.filter(
      product =>
        existsProducts.filter(p => p.id === product.id)[0].quantity <
        product.quantity,
    );

    if (quantityAvailable.length) {
      throw new AppError(
        `The quantity ${quantityAvailable[0].quantity} is not available for ${quantityAvailable[0].id}.`,
      );
    }

    const serializedProducts = products.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
      price: existsProducts.filter(p => p.id === product.id)[0].price,
    }));

    const order = await this.ordersRepository.createOrder({
      customer: customerExits,
      products: serializedProducts,
    });

    const { order_products } = order;

    const updatedProductsQuantity = order_products.map(product => ({
      id: product.product_id,
      quantity:
        existsProducts.filter(p => p.id === product.product_id)[0].quantity -
        product.quantity,
    }));

    await this.productsRepository.updateStock(updatedProductsQuantity);

    return order;
  }
}

export { CreateOrderService };

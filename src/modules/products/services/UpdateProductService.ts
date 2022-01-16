import redisCache from '@shared/cache/RedisCache';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/models/IProduct';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';

interface IRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ id, name, price, quantity }: IRequest): Promise<IProduct> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    const productExits = await this.productsRepository.findByName(name);

    if (productExits && name !== product.name) {
      throw new AppError('The product already exists.');
    }

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await this.productsRepository.save(product);

    return product;
  }
}

export { UpdateProductService };

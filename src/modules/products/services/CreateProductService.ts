import redisCache from '@shared/cache/RedisCache';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/models/IProduct';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ name, price, quantity }: IRequest): Promise<IProduct> {
    const productExits = await this.productsRepository.findByName(name);

    if (productExits) {
      throw new AppError('The product already exists.');
    }

    const product = this.productsRepository.create({
      name,
      price,
      quantity,
    });

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    return product;
  }
}

export { CreateProductService };

import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/models/IProduct';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';

interface IRequest {
  id: string;
}

@injectable()
class ShowProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<IProduct> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    return product;
  }
}

export { ShowProductService };

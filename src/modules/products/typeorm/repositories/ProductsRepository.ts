import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
class ProductsRepository
  extends Repository<Product>
  implements IProductsRepository
{
  async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}

export { ProductsRepository };

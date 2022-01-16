import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { EntityRepository, In, Repository } from 'typeorm';
import { Product } from '../entities/Product';

interface IFindProducts {
  id: string;
}

@EntityRepository(Product)
class ProductsRepository
  extends Repository<Product>
  implements IProductsRepository
{
  async findAllByIds(products: IFindProducts[]): Promise<Product[]> {
    const productsIds = products.map(product => product.id);

    const existsProducts = await this.find({ id: In(productsIds) });

    return existsProducts;
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.findOne({ name });

    return product;
  }
}

export { ProductsRepository };

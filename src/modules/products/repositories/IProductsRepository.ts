import { Product } from '../typeorm/entities/Product';

interface IProductsRepository {
  findByName(name: string): Promise<Product | undefined>;
}

export { IProductsRepository };

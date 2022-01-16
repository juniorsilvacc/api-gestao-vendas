import { Product } from '../infra/typeorm/entities/Product';

interface IFindProducts {
  id: string;
}

interface IProductsRepository {
  findByName(name: string): Promise<Product | undefined>;
  findAllByIds(product: IFindProducts[]): Promise<Product[]>;
}

export { IProductsRepository };

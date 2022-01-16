import { ICreateProductDTOS } from '../dtos/ICreateProductDTOS';
import { IProduct } from '../models/IProduct';

interface IFindProducts {
  id: string;
}

interface IUpdateStock {
  id: string;
  quantity: number;
}

interface IProductsRepository {
  updateStock(products: IUpdateStock[]): Promise<void>;
  findAll(): Promise<IProduct[]>;
  findByDelete(id: string): Promise<void>;
  findById(id: string): Promise<IProduct | undefined>;
  create(data: ICreateProductDTOS): Promise<IProduct>;
  findByName(name: string): Promise<IProduct | undefined>;
  findAllByIds(product: IFindProducts[]): Promise<IProduct[]>;
  save(product: IProduct): Promise<IProduct>;
}

export { IProductsRepository };

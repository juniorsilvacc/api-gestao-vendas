import { IProduct } from '@modules/products/domain/models/IProduct';
import { IProductsRepository } from '@modules/products/domain/repositories/IProductsRepository';
import { ICreateProductDTOS } from '@modules/products/domain/dtos/ICreateProductDTOS';
import { getRepository, In, Repository } from 'typeorm';
import { Product } from '../entities/Product';

interface IFindProducts {
  id: string;
}

interface IUpdateStock {
  id: string;
  quantity: number;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  async updateStock(products: IUpdateStock[]): Promise<void> {
    await this.ormRepository.save(products);
  }

  async findAll(): Promise<IProduct[]> {
    const allProducts = await this.ormRepository.find();

    return allProducts;
  }

  async findByDelete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findById(id: string): Promise<IProduct | undefined> {
    const product = await this.ormRepository.findOne({ id });

    return product;
  }

  async create({
    name,
    price,
    quantity,
  }: ICreateProductDTOS): Promise<IProduct> {
    const createProduct = this.ormRepository.create({
      name,
      price,
      quantity,
    });

    await this.ormRepository.save(createProduct);

    return createProduct;
  }

  async findAllByIds(products: IFindProducts[]): Promise<IProduct[]> {
    const productsIds = products.map(product => product.id);

    const existsProducts = await this.ormRepository.find({
      id: In(productsIds),
    });

    return existsProducts;
  }

  async findByName(name: string): Promise<IProduct | undefined> {
    const product = await this.ormRepository.findOne({ name });

    return product;
  }

  async save(product: IProduct): Promise<IProduct> {
    await this.ormRepository.save(product);

    return product;
  }
}

export { ProductsRepository };

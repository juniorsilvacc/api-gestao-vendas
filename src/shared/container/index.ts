import { container } from 'tsyringe';

import { ICustomersRepository } from '@modules/customers/domain/repositories/ICustomersRepository';
import { CustomersRepository } from '@modules/customers/infra/typeorm/repositories/CustomersRepository';
import { OrdersRepository } from '@modules/orders/infra/typeorm/repositories/OrdersRepository';
import { IOrdersRepository } from '@modules/orders/domain/repositories/IOrdersRepository';
import { ProductsRepository } from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import { IProductsRepository } from '@modules/products/domain/repositories/IProductsRepository';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUserTokensRepository } from '@modules/users/domain/repositories/IUserTokensRepository';
import { UserTokensRepository } from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import '@modules/users/providers';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

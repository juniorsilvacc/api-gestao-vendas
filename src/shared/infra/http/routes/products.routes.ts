import { CreateProductController } from '@modules/products/infra/controllers/CreateProductController';
import { DeleteProductController } from '@modules/products/infra/controllers/DeleteProductController';
import { ListProductController } from '@modules/products/infra/controllers/ListProductController';
import { ShowProductController } from '@modules/products/infra/controllers/ShowProductController';
import { UpdateProductController } from '@modules/products/infra/controllers/UpdateProductController';
import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import {
  validationCreate,
  validationDelete,
  validationShow,
  validationUpdate,
} from '../middlewares/validation';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const showProductController = new ShowProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.post('/', validationCreate, createProductController.handle);

productsRoutes.get('/', listProductController.handle);

productsRoutes.get('/:id', validationShow, showProductController.handle);

productsRoutes.delete('/:id', validationDelete, deleteProductController.handle);

productsRoutes.patch('/:id', validationUpdate, updateProductController.handle);

export { productsRoutes };

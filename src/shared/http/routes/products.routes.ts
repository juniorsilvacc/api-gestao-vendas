import { CreateProductController } from '@modules/products/controllers/CreateProductController';
import { DeleteProductController } from '@modules/products/controllers/DeleteProductController';
import { ListProductController } from '@modules/products/controllers/ListProductController';
import { ShowProductController } from '@modules/products/controllers/ShowProductController';
import { UpdateProductController } from '@modules/products/controllers/UpdateProductController';

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

productsRoutes.post(
  '/',
  validationCreate,
  ensureAuthenticated,
  createProductController.handle,
);

productsRoutes.get('/', ensureAuthenticated, listProductController.handle);

productsRoutes.get(
  '/:id',
  validationShow,
  ensureAuthenticated,
  showProductController.handle,
);

productsRoutes.delete(
  '/:id',
  validationDelete,
  ensureAuthenticated,
  deleteProductController.handle,
);

productsRoutes.patch(
  '/:id',
  validationUpdate,
  ensureAuthenticated,
  updateProductController.handle,
);

export { productsRoutes };

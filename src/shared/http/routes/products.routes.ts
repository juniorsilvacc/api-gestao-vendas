import { CreateProductController } from '@modules/products/controllers/CreateProductController';
import { DeleteProductController } from '@modules/products/controllers/DeleteProductController';
import { ListProductController } from '@modules/products/controllers/ListProductController';
import { ShowProductController } from '@modules/products/controllers/ShowProductController';
import { UpdateProductController } from '@modules/products/controllers/UpdateProductController';

import { Router } from 'express';

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

productsRoutes.post('/', validationCreate, createProductController.handle);

productsRoutes.get('/', listProductController.handle);

productsRoutes.get('/:id', validationShow, showProductController.handle);

productsRoutes.delete('/:id', validationDelete, deleteProductController.handle);

productsRoutes.patch('/:id', validationUpdate, updateProductController.handle);

export { productsRoutes };

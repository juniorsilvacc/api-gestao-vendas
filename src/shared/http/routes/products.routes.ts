import { CreateProductController } from '@modules/products/controllers/CreateProductController';
import { DeleteProductController } from '@modules/products/controllers/DeleteProductController';
import { ListProductController } from '@modules/products/controllers/ListProductController';
import { Router } from 'express';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();

productsRoutes.post('/', createProductController.handle);
productsRoutes.get('/', listProductController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);

export { productsRoutes };

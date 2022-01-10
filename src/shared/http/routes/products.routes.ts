import { CreateProductController } from '@modules/products/controllers/CreateProductController';
import { DeleteProductController } from '@modules/products/controllers/DeleteProductController';
import { ListProductController } from '@modules/products/controllers/ListProductController';
import { ShowProductController } from '@modules/products/controllers/ShowProductController';
import { UpdateProductController } from '@modules/products/controllers/UpdateProductController';
import { Router } from 'express';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const showProductController = new ShowProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

productsRoutes.post('/', createProductController.handle);
productsRoutes.get('/', listProductController.handle);
productsRoutes.get('/:id', showProductController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);
productsRoutes.patch('/:id', updateProductController.handle);

export { productsRoutes };

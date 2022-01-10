import { CreateProductController } from '@modules/products/controllers/CreateProductController';
import { DeleteProductController } from '@modules/products/controllers/DeleteProductController';
import { ListProductController } from '@modules/products/controllers/ListProductController';
import { ShowProductController } from '@modules/products/controllers/ShowProductController';
import { UpdateProductController } from '@modules/products/controllers/UpdateProductController';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const showProductController = new ShowProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

//Create
productsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2),
      quantity: Joi.number().required(),
    },
  }),
  createProductController.handle,
);

//List All
productsRoutes.get('/', listProductController.handle);

//List Show
productsRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  showProductController.handle,
);

//Delete
productsRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteProductController.handle,
);

//Update
productsRoutes.patch(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2),
      quantity: Joi.number().required(),
    },
  }),
  updateProductController.handle,
);

export { productsRoutes };

import { CreateOrderController } from '@modules/orders/controllers/CreateOrderController';
import { ShowOrderController } from '@modules/orders/controllers/ShowOrderController';
import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import {
  validationCreateOrder,
  validationShowOrder,
} from '../middlewares/validation';

const ordersRoutes = Router();

const createOrderController = new CreateOrderController();
const showOrderController = new ShowOrderController();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.post('/', validationCreateOrder, createOrderController.handle);

ordersRoutes.get('/:id', validationShowOrder, showOrderController.handle);

export { ordersRoutes };

import { CreateCustomerController } from '@modules/customers/infra/controllers/CreateCustomerController';
import { DeleteCustomerController } from '@modules/customers/infra/controllers/DeleteCustomerController';
import { ListCustomerController } from '@modules/customers/infra/controllers/ListCustomerController';
import { ShowCustomerController } from '@modules/customers/infra/controllers/ShowCustomerController';
import { UpdateCustomerController } from '@modules/customers/infra/controllers/UpdateCustomerController';
import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import {
  validationCreateCustomer,
  validationDelete,
  validationShow,
  validationUpdateCustomer,
} from '../middlewares/validation';

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomerController();
const showCustomerController = new ShowCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const updateCustomerController = new UpdateCustomerController();

customersRoutes.use(ensureAuthenticated);

customersRoutes.post(
  '/',
  validationCreateCustomer,
  createCustomerController.handle,
);

customersRoutes.get('/', listCustomerController.handle);

customersRoutes.get('/:id', validationShow, showCustomerController.handle);

customersRoutes.delete(
  '/:id',
  validationDelete,
  deleteCustomerController.handle,
);

customersRoutes.patch(
  '/:id',
  validationUpdateCustomer,
  updateCustomerController.handle,
);

export { customersRoutes };

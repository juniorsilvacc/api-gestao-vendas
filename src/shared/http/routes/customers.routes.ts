import { CreateCustomerController } from '@modules/customers/controllers/CreateCustomerController';
import { DeleteCustomerController } from '@modules/customers/controllers/DeleteCustomerController';
import { ListCustomerController } from '@modules/customers/controllers/ListCustomerController';
import { ShowCustomerController } from '@modules/customers/controllers/ShowCustomerController';
import { UpdateCustomerController } from '@modules/customers/controllers/UpdateCustomerController';
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

customersRoutes.post(
  '/',
  ensureAuthenticated,
  validationCreateCustomer,
  createCustomerController.handle,
);

customersRoutes.get('/', ensureAuthenticated, listCustomerController.handle);

customersRoutes.get(
  '/:id',
  ensureAuthenticated,
  validationShow,
  showCustomerController.handle,
);

customersRoutes.delete(
  '/:id',
  ensureAuthenticated,
  validationDelete,
  deleteCustomerController.handle,
);

customersRoutes.patch(
  '/:id',
  ensureAuthenticated,
  validationUpdateCustomer,
  updateCustomerController.handle,
);

export { customersRoutes };

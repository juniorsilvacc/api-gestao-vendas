import { CreateUserController } from '@modules/users/controllers/CreateUserController';
import { ListUserController } from '@modules/users/controllers/ListUserController';
import { Router } from 'express';
import { validationUser } from '../middlewares/validation';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();

usersRoutes.post('/', validationUser, createUserController.handle);
usersRoutes.get('/', listUsersController.handle);

export { usersRoutes };

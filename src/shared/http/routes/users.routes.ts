import { CreateUserController } from '@modules/users/controllers/CreateUserController';
import { ListUserController } from '@modules/users/controllers/ListUserController';
import { UpdateAvatarUserController } from '@modules/users/controllers/UpdateAvatarUserController';

import { Router } from 'express';
import { validationUser } from '../middlewares/validation';

import multer from 'multer';
import uploadConfig from '@config/upload';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUserController();
const updateAvatarUserController = new UpdateAvatarUserController();

const upload = multer(uploadConfig);

usersRoutes.get('/', listUsersController.handle);

usersRoutes.post('/', validationUser, createUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateAvatarUserController.handle,
);

export { usersRoutes };

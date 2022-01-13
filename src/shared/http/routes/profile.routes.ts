import { ShowProfileUserController } from '@modules/users/controllers/ShowProfileUserController';
import { UpdateProfileUserController } from '@modules/users/controllers/UpdateProfileUserController';
import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { validationProfile } from '../middlewares/validation';

const profileRoutes = Router();

const updateProfileUserController = new UpdateProfileUserController();
const showProfileUserController = new ShowProfileUserController();

profileRoutes.put(
  '/',
  ensureAuthenticated,
  validationProfile,
  updateProfileUserController.handle,
);

profileRoutes.get('/', ensureAuthenticated, showProfileUserController.handle);

export { profileRoutes };

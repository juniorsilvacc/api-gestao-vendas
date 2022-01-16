import { ShowProfileUserController } from '@modules/users/infra/controllers/ShowProfileUserController';
import { UpdateProfileUserController } from '@modules/users/infra/controllers/UpdateProfileUserController';
import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { validationProfile } from '../middlewares/validation';

const profileRoutes = Router();

const updateProfileUserController = new UpdateProfileUserController();
const showProfileUserController = new ShowProfileUserController();

profileRoutes.use(ensureAuthenticated);

profileRoutes.put('/', validationProfile, updateProfileUserController.handle);

profileRoutes.get('/', showProfileUserController.handle);

export { profileRoutes };

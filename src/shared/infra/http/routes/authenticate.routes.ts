import { AuthenticateSessionController } from '@modules/users/infra/controllers/AuthenticateSessionController';
import { Router } from 'express';
import { validationAuthenticate } from '../middlewares/validation';

const authenticateRoutes = Router();

const authenticateSessionController = new AuthenticateSessionController();

authenticateRoutes.post(
  '/sessions',
  validationAuthenticate,
  authenticateSessionController.handle,
);

export { authenticateRoutes };

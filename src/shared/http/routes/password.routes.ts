import { ForgotPasswordController } from '@modules/users/controllers/ForgotPasswordController';
import { Router } from 'express';
import { validationForgotPassword } from '../middlewares/validation';

const passwordRoutes = Router();

const forgotPasswordController = new ForgotPasswordController();

passwordRoutes.post(
  '/forgot',
  validationForgotPassword,
  forgotPasswordController.handle,
);

export { passwordRoutes };

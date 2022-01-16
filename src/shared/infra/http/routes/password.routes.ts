import { ForgotPasswordController } from '@modules/users/infra/controllers/ForgotPasswordController';
import { ResetPasswordController } from '@modules/users/infra/controllers/ResetPasswordController';
import { Router } from 'express';
import {
  validationForgotPassword,
  validationResetPassword,
} from '../middlewares/validation';

const passwordRoutes = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRoutes.post(
  '/forgot',
  validationForgotPassword,
  forgotPasswordController.handle,
);

passwordRoutes.post(
  '/reset',
  validationResetPassword,
  resetPasswordController.handle,
);

export { passwordRoutes };

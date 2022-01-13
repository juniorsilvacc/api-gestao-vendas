import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { customersRoutes } from './customers.routes';
import { passwordRoutes } from './password.routes';
import { productsRoutes } from './products.routes';
import { profileRoutes } from './profile.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/password', passwordRoutes);
router.use('/profile', profileRoutes);
router.use('/customers', customersRoutes);
router.use(authenticateRoutes);

export { router };

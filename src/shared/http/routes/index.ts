import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { passwordRoutes } from './password.routes';
import { productsRoutes } from './products.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/password', passwordRoutes);
router.use(authenticateRoutes);

export { router };

import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { productsRoutes } from './products.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };

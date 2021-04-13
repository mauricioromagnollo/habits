import { Router } from 'express';

import { sessionRoutes } from './session';
import { userRoutes } from './user';

const routes = Router();

routes.use('/sessions', sessionRoutes);
routes.use('/users', userRoutes);

export { routes };

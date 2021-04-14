import { Router } from 'express';

import { sessionRoutes } from './session';
import { userRoutes } from './user';
import { eventRoutes } from './event';

const routes = Router();

routes.use('/sessions', sessionRoutes);
routes.use('/users', userRoutes);
routes.use('/events', eventRoutes);

export { routes };

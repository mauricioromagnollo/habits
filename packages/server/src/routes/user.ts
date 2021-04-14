import { Router } from 'express';

import { UserController } from '../controllers/user';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', userController.create);
userRoutes.get('/:id', userController.show);
userRoutes.patch('/:id', userController.update);

export { userRoutes };

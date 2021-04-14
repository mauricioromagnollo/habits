import { Router } from 'express';

import { EventController } from '../controllers/event';

const eventRoutes = Router();

const eventController = new EventController();

eventRoutes.post('/', eventController.create);
eventRoutes.delete('/:id', eventController.delete);
eventRoutes.get('/', eventController.index);

export { eventRoutes };

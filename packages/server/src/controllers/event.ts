import { Request, Response } from 'express';

import { EventRepository } from '../repositories/event';

export class EventController {
  constructor() {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, date, hour, userId } = request.body;

    // Verificar se já existe algum evento com a mesma data;
    const eventRepository = new EventRepository();

    const event = await eventRepository.create({
      name,
      description,
      date,
      hour,
      userId,
    });

    return response.json(event);
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const eventRepository = new EventRepository();

    eventRepository.delete(id);
    return response.status(200).end();
  }

  public async index(
    _request: Request,
    response: Response,
  ): Promise<Response<Event[]>> {
    const eventRepository = new EventRepository();
    const events = await eventRepository.listAll();
    return response.json(events);
  }
}

import { Request, Response } from 'express';

import { AppError } from '../error/app-error';
import { EventRepository } from '../repositories/event';

import EventView from '../views/event';

export class EventController {
  constructor() {}

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, startAt, endsAt, userId } = request.body;

    const eventRepository = new EventRepository();

    const hasEventInTheSameDate = await eventRepository.findByDate(startAt);

    if (hasEventInTheSameDate) {
      throw new AppError('This event is already booked');
    }

    const event = await eventRepository.create({
      name,
      description,
      startAt,
      endsAt,
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
  ): Promise<Response<Event[] | undefined>> {
    const eventRepository = new EventRepository();
    const events = await eventRepository.list();
    if (events) {
      return response.json(EventView.renderMany(events));
    }

    throw new AppError('No Events!');
  }

  public async show(
    request: Request,
    response: Response,
  ): Promise<Response<Event[]>> {
    const { month } = request.query;
    console.log(month);
    const eventRepository = new EventRepository();
    const events = await eventRepository.findAllInMonth(Number(month));
    return response.json(events);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, startAt, endsAt } = request.body;
    const eventRepository = new EventRepository();
    eventRepository.update(id, { name, description, startAt, endsAt });
    return response.json({ message: 'Evento atualizado' });
  }
}

import { getRepository, Raw, Repository } from 'typeorm';

import { AppError } from '../error/app-error';
import { Event } from '../models/event';

type IEventCreate = {
  name: string;
  description: string;
  startAt: Date;
  endsAt: Date;
  userId: string;
};

type IEventUpdate = {
  name?: string;
  description?: string;
  startAt?: Date;
  endsAt?: Date;
};

interface IEventRepository {
  create(data: IEventCreate, userId: string): Promise<Event>;
  delete(id: string): Promise<void>;
  list(): Promise<Event[] | undefined>;
  findByDate(date: Date): Promise<Event | undefined>;
  findAllInMonth(monthNumber: number): Promise<Event[] | undefined>;
  update(id: string, data: IEventCreate): Promise<Event>;
}

export class EventRepository implements IEventRepository {
  private ormRepository: Repository<Event>;

  constructor() {
    this.ormRepository = getRepository(Event);
  }

  public async create({
    name,
    description,
    startAt,
    endsAt,
    userId,
  }: IEventCreate): Promise<Event> {
    const newEvent = this.ormRepository.create({
      name,
      description,
      startAt,
      endsAt,
      userId,
    });
    await this.ormRepository.save(newEvent);
    return newEvent;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async list(): Promise<Event[] | undefined> {
    const events = await this.ormRepository.find();
    return events;
  }

  public async findByDate(date: Date): Promise<Event | undefined> {
    const findEvent = await this.ormRepository.findOne({
      where: {
        startAt: date,
      },
    });

    return findEvent;
  }

  public async findAllInMonth(
    monthNumber: number,
  ): Promise<Event[] | undefined> {
    const parsedMonth = String(monthNumber).padStart(2, '0');
    const currentYear = new Date().getFullYear();

    const events = await this.ormRepository.find({
      where: {
        startAt: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'MM-YYYY') = '${parsedMonth}-${currentYear}'`,
        ),
      },
    });

    return events;
  }

  public async update(
    id: string,
    { name, description, startAt, endsAt }: IEventUpdate,
  ): Promise<Event> {
    const event = await this.ormRepository.findOne(id);

    if (!event) {
      throw new AppError('Event not founded!');
    }

    event.name = name || event.name;
    event.description = description || event.description;
    event.startAt = startAt || event.startAt;
    event.endsAt = endsAt || event.endsAt;

    return this.ormRepository.save(event);
  }
}

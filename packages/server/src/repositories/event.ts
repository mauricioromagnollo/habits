import { getRepository, Repository } from 'typeorm';

import { Event } from '../models/event';

type IEventCreate = {
  name: string;
  description: string;
  date: string;
  hour: string;
  userId: string;
};

interface IEventRepository {
  create(data: IEventCreate, userId: string): Promise<Event>;
  delete(id: string): Promise<void>;
  listAll(): Promise<Event[] | undefined>;
  // update(id: string, data: IEventCreate): Promise<Event>;
  // findAllInMonth(monthNumber: number): Promise<Event[] | undefined>;
  // findAllEventsThatHaveAlreadyOccurred(): Promise<Event[] | undefined>;
  // findNextEvents(): Promise<Event[]>;
}

export class EventRepository implements IEventRepository {
  private ormRepository: Repository<Event>;

  constructor() {
    this.ormRepository = getRepository(Event);
  }

  public async create({
    name,
    description,
    date,
    hour,
    userId,
  }: IEventCreate): Promise<Event> {
    const newEvent = this.ormRepository.create({
      name,
      description,
      date,
      hour,
      userId,
    });
    await this.ormRepository.save(newEvent);
    return newEvent;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async listAll(): Promise<Event[] | undefined> {
    const events = await this.ormRepository.find();
    return events;
  }
}

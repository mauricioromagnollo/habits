import { getRepository, Repository } from 'typeorm';

import { User } from '../models/user';

interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: IUserCreate): Promise<User>;
}

export class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }

  public async create(data: IUserCreate): Promise<User> {
    const newUser = this.ormRepository.create(data);
    await this.ormRepository.save(newUser);
    return newUser;
  }
}

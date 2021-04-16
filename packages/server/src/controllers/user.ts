import { Request, Response } from 'express';

import { AppError } from '../error/app-error';
import { HashProvider } from '../providers/hash';
import { UserRepository } from '../repositories/user';

export class UserController {
  constructor() {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();

    const isAlreadyExist = await userRepository.findByEmail(email);

    if (isAlreadyExist) {
      return response.json({ message: 'Usuário já existe!' });
    }

    const hashedPassword = await HashProvider.generateHash(password);

    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return response.status(200).json(user);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppError('User not exist!', 401);
    }

    Reflect.deleteProperty(user, 'password');

    return response.json(user);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppError('User not founded!');
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    userRepository.save(user);

    return response.json(user);
  }
}

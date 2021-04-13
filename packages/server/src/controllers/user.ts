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

    return response.json(user);
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
}

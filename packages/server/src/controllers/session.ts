import { Request, Response } from 'express';

import { AppError } from '../error/app-error';
import { HashProvider } from '../providers/hash';
import { UserRepository } from '../repositories/user';

export class SessionController {
  constructor() {}

  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User not founded!', 401);
    }

    const isTheSamePassword = await HashProvider.compareHash(
      password,
      user.password,
    );

    if (!isTheSamePassword) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    Reflect.deleteProperty(user, 'password');

    return response.json(user);
  }
}

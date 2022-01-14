import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProfileUserService } from '../services/UpdateProfileUserService';

import { instanceToInstance } from 'class-transformer';

class UpdateProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;

    const { name, email, password, old_password } = request.body;

    const updateProfileUserService = container.resolve(
      UpdateProfileUserService,
    );

    const user = await updateProfileUserService.execute({
      id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(instanceToInstance(user));
  }
}

export { UpdateProfileUserController };

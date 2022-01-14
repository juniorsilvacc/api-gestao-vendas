import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProfileUserService } from '../services/ShowProfileUserService';

import { instanceToInstance } from 'class-transformer';

class ShowProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUserService = container.resolve(ShowProfileUserService);

    const id = request.user.id;

    const user = await showProfileUserService.execute({ id });

    return response.json(instanceToInstance(user));
  }
}

export { ShowProfileUserController };

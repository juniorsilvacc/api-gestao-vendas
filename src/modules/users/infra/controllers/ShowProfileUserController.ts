import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { instanceToInstance } from 'class-transformer';
import { ShowProfileUserService } from '@modules/users/services/ShowProfileUserService';

class ShowProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUserService = container.resolve(ShowProfileUserService);

    const id = request.user.id;

    const user = await showProfileUserService.execute({ id });

    return response.json(instanceToInstance(user));
  }
}

export { ShowProfileUserController };

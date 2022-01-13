import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProfileUserService } from '../services/ShowProfileUserService';

class ShowProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUserService = container.resolve(ShowProfileUserService);

    const id = request.user.id;

    const user = await showProfileUserService.execute({ id });

    return response.json(user);
  }
}

export { ShowProfileUserController };

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { instanceToInstance } from 'class-transformer';
import { ListUserService } from '@modules/users/services/ListUserService';

class ListUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUserService = container.resolve(ListUserService);

    const users = await listUserService.execute();

    return response.json(instanceToInstance(users));
  }
}

export { ListUserController };

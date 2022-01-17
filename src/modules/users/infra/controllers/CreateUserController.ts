import { CreateUserService } from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const createUser = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(instanceToInstance(createUser));
  }
}

export { CreateUserController };

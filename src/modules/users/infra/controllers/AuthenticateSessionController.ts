import { AuthenticateSessionService } from '@modules/users/services/AuthenticateSessionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class AuthenticateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateSessionService = container.resolve(
      AuthenticateSessionService,
    );

    const token = await authenticateSessionService.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateSessionController };

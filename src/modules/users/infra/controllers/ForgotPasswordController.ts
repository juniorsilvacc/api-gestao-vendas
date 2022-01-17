import { SendForgotPasswordService } from '@modules/users/services/SendForgotPasswordService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ForgotPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordService = container.resolve(
      SendForgotPasswordService,
    );

    await sendForgotPasswordService.execute({
      email,
    });

    return response.json();
  }
}

export { ForgotPasswordController };
